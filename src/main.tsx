import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPreview from './components/ErrorPreview';
import './index.css';

const showErrorPreview =
  import.meta.env.DEV && new URLSearchParams(window.location.search).has('preview-error');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HelmetProvider>{showErrorPreview ? <ErrorPreview /> : <App />}</HelmetProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
