import { render, screen } from '@testing-library/react';
import { axe } from 'vitest-axe';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import ErrorBoundary from '../src/components/ErrorBoundary';

function Throws() {
  throw new Error('Private rendering details');
}

describe('ErrorBoundary', () => {
  beforeEach(() => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('shows an accessible fallback without exposing the error', async () => {
    const { container } = render(
      <ErrorBoundary>
        <Throws />
      </ErrorBoundary>,
    );

    expect(
      screen.getByRole('heading', { name: 'This page didn’t load as expected.' }),
    ).toBeTruthy();
    expect(screen.queryByText('Private rendering details')).toBeNull();
    const results = await axe(container);
    expect(results).toHaveNoViolations();

    screen.getByRole('button', { name: 'Try again' }).click();
    expect(
      screen.getByRole('heading', { name: 'This page didn’t load as expected.' }),
    ).toBeTruthy();
  });
});
