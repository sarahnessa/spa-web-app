import { Component, type ErrorInfo, type ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application rendering error:', error, info.componentStack);
  }

  private retry = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 py-16 text-center text-[var(--foreground)]">
          <section aria-labelledby="application-error-title" className="max-w-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              A moment of pause
            </p>
            <h1 id="application-error-title" className="mb-4 font-serif text-3xl font-semibold">
              This page didn’t load as expected.
            </h1>
            <p className="mb-8 leading-relaxed text-[var(--muted-foreground)]">
              Something went wrong while opening this page. You can try loading it again.
            </p>
            <button
              type="button"
              onClick={this.retry}
              className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--ring)]"
            >
              Try again
            </button>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
