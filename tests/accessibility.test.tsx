import type { ComponentType } from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'vitest-axe';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter, Route, Routes } from 'react-router';
import { describe, expect, it } from 'vitest';
import Layout from '../src/components/Layout';
import About from '../src/pages/About';
import Admin from '../src/pages/Admin';
import Booking from '../src/pages/Booking';
import Contact from '../src/pages/Contact';
import Gallery from '../src/pages/Gallery';
import Home from '../src/pages/Home';
import MedicalIntake from '../src/pages/MedicalIntake';

function renderPage(Page: ComponentType, path = '/') {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[path]}>
        {Page === Admin ? (
          <Routes>
            <Route path="*" element={<Admin />} />
          </Routes>
        ) : (
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<Page />} />
            </Route>
          </Routes>
        )}
      </MemoryRouter>
    </HelmetProvider>,
  );
}

async function expectAccessible(container: HTMLElement) {
  const results = await axe(container, { rules: { 'frame-tested': { enabled: false } } });
  expect(results).toHaveNoViolations();
}

const pages: Array<[string, ComponentType, string]> = [
  ['home', Home, '/'],
  ['about', About, '/about'],
  ['booking', Booking, '/booking'],
  ['gallery', Gallery, '/gallery'],
  ['contact', Contact, '/contact'],
  ['medical intake', MedicalIntake, '/medical-intake'],
  ['admin', Admin, '/admin'],
];

describe('page accessibility', () => {
  it.each(pages)('%s page has no axe violations', async (_name, Page, path) => {
    const { container } = renderPage(Page, path);
    if (Page === Contact) {
      const mapFrame = container.querySelector('iframe');
      expect(mapFrame?.getAttribute('title')).toBe('Serenova Wellness Spa location');
      // jsdom's cross-window iframe shim is incompatible with axe-core frame traversal.
      mapFrame?.remove();
    }
    await expectAccessible(container);
  });
});

describe('keyboard interactive accessibility', () => {
  it('opens and closes the mobile navigation with keyboard controls', async () => {
    const user = userEvent.setup();
    const { container } = renderPage(Home);
    const toggle = screen.getByRole('button', { name: 'Toggle menu' });

    toggle.focus();
    await user.keyboard(' ');
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    await expectAccessible(container);

    await user.keyboard('{Escape}');
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(toggle);
  });

  it('opens the gallery preview by keyboard and restores focus on Escape', async () => {
    const user = userEvent.setup();
    const { container } = renderPage(Gallery, '/gallery');
    const photoButton = screen.getAllByRole('button', { name: /View image:/ })[0];
    photoButton.focus();
    await user.keyboard('{Enter}');

    const dialog = screen.getByRole('dialog', { name: /Image preview:/ });
    expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Close image' }));
    await expectAccessible(container);

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(document.activeElement).toBe(photoButton);
    expect(document.body.contains(dialog)).toBe(false);
  });

  it('traps focus in the admin drawer and closes it with Escape', async () => {
    const user = userEvent.setup();
    const { container } = renderPage(Admin, '/admin');
    const trigger = screen.getByRole('button', { name: 'Open navigation' });
    await user.click(trigger);

    const drawer = screen.getByRole('dialog', { name: 'Admin navigation' });
    const close = within(drawer).getByRole('button', { name: 'Close navigation' });
    expect(document.activeElement).toBe(close);
    await expectAccessible(container);

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog', { name: 'Admin navigation' })).toBeNull();
    expect(document.activeElement).toBe(trigger);
  });

  it('announces the intake success dialog and dismisses it with Escape', async () => {
    const user = userEvent.setup();
    const { container } = renderPage(MedicalIntake, '/medical-intake');
    const submit = screen.getByRole('button', { name: 'Submit Intake Form' });
    const form = submit.closest('form');
    expect(form).not.toBeNull();
    fireEvent.submit(form!);

    const dialog = await screen.findByRole('alertdialog', { name: 'Intake Form Submitted' });
    expect(document.activeElement).toBe(
      within(dialog).getByRole('link', { name: 'Go back to set your appointment' }),
    );
    await expectAccessible(container);

    await user.keyboard('{Escape}');
    expect(screen.queryByRole('alertdialog')).toBeNull();
    expect(document.activeElement).toBe(submit);
  });

  it('keeps the booking options operable with Enter and exposes selected state', async () => {
    const user = userEvent.setup();
    renderPage(Booking, '/booking');
    const service = screen.getByRole('button', { name: /Herbal Body Wrap/ });
    service.focus();
    await user.keyboard('{Enter}');
    expect(service.getAttribute('aria-pressed')).toBe('true');

    const practitioner = screen.getByLabelText('Practitioner preference');
    await user.selectOptions(practitioner, 'Samantha Whittaker');
    expect((practitioner as HTMLSelectElement).value).toBe('Samantha Whittaker');
  });
});
