import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router';
import { describe, expect, it } from 'vitest';
import Admin from '../src/pages/Admin';
import Booking from '../src/pages/Booking';
import Contact from '../src/pages/Contact';

function renderWithProviders(ui: React.ReactElement, route = '/') {
  return render(
    <HelmetProvider>
      <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
    </HelmetProvider>,
  );
}

describe('Booking flow', () => {
  it('completes a full multi-step booking from service selection to confirmation', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Booking />, '/booking');

    // Step 1: Service & Practitioner
    await user.click(screen.getByRole('button', { name: /Herbal Body Wrap/ }));
    const practitioner = screen.getByLabelText('Practitioner preference');
    expect(within(practitioner).queryByRole('option', { name: 'Kenji Miller' })).toBeNull();
    await user.selectOptions(practitioner, 'Samantha Whittaker');
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    // Step 2: Date & Time (advance month if end of month has no remaining slots)
    if (!screen.queryAllByRole('button', { name: / available$/i }).length) {
      await user.click(screen.getByRole('button', { name: 'Next month' }));
    }
    const availableDays = screen.getAllByRole('button', { name: / available$/i });
    await user.click(availableDays[0]);

    const timeSlots = screen.getAllByRole('button', { name: /AM|PM/ });
    await user.click(timeSlots[0]);
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    // Step 3: Details
    await user.type(screen.getByLabelText('First name'), 'Elara');
    await user.type(screen.getByLabelText('Last name'), 'Moss');
    await user.type(screen.getByLabelText('Email'), 'elara@example.com');
    await user.click(screen.getByRole('button', { name: 'Continue' }));

    // Step 4: Confirm
    expect(screen.getByText('Elara Moss')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Confirm Booking' }));

    expect(screen.getByRole('heading', { name: 'You are booked, Elara.' })).toBeTruthy();
  });
});

describe('Admin dashboard', () => {
  it('filters appointments by search query and status', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Admin />, '/admin');

    const searchInput = screen.getByLabelText('Search all admin records');
    await user.type(searchInput, 'Phoenix');

    expect(screen.getAllByText('Phoenix Baker').length).toBeGreaterThan(0);
    expect(screen.queryByText('Olivia Rhye')).toBeNull();

    await user.clear(searchInput);
    await user.type(searchInput, 'Nonexistent Client');
    expect(screen.getByText('No appointments match your search.')).toBeTruthy();
  });
});

describe('Contact page', () => {
  it('submits the contact form and allows sending another message', async () => {
    const user = userEvent.setup();
    renderWithProviders(<Contact />, '/contact');

    await user.type(screen.getByLabelText('Your name'), 'Rowan Birch');
    await user.type(screen.getByLabelText('Email address'), 'rowan@example.com');
    await user.selectOptions(screen.getByLabelText('Subject'), 'General enquiry');
    await user.type(screen.getByLabelText('Message'), 'Do you offer couples packages?');

    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    fireEvent.submit(submitButton.closest('form')!);

    expect(screen.getByRole('heading', { name: 'Message received' })).toBeTruthy();
    expect(screen.getByText(/Thank you, Rowan Birch/)).toBeTruthy();

    await user.click(screen.getByRole('button', { name: 'Send another message' }));
    expect((screen.getByLabelText('Your name') as HTMLInputElement).value).toBe('');
  });
});
