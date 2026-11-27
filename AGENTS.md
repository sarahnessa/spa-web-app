# Project Engineering Standards

You are working on a full-stack React + TypeScript application. Follow these rules strictly on every task before finishing your response.

## 1. General & TypeScript Rules

- Always use strict TypeScript (`"strict": true`). Never use `any`; define explicit interfaces or infer types from Zod schemas.
- Keep components, hooks, and utilities modular and separated into clear directories (`components/`, `hooks/`, `pages/` or `features/`, `services/`, `types/`).
- Never hardcode secrets, API keys, or database URLs. Reference environment variables (`import.meta.env.VITE_*` on front-end, `process.env.*` on back-end) and update `.env.example` when adding new keys.

## 2. Front-End Rules (React)

- **Data Fetching:** Use TanStack Query for server state instead of raw `useEffect` + `fetch`.
- **Unmounting & Cleanup (CRITICAL):** Every `useEffect` that registers timers (`setTimeout`/`setInterval`), event listeners (`addEventListener`), WebSockets/subscriptions, observers, `URL.createObjectURL()`, or raw `fetch` calls (`AbortController`) MUST return a cleanup function to tear them down on unmount.
- **UI States:** Never build only the happy path. Every data-driven view must handle:
  1. Loading state (skeleton or spinner)
  2. Empty state (clear message when data array is empty)
  3. Error state (user-friendly fallback + Error Boundary protection)
- **Forms:** Use React Hook Form + Zod for client-side form validation.
- **Accessibility & Styling:** Use semantic HTML (`<button>`, `<nav>`, `<main>`), include `alt` attributes on images, and ensure keyboard navigation works.
- **Accessibility & UI Testing:** All new UI components must pass Oxlint `jsx-a11y` rules and include a `vitest-axe` test case (`expect(results).toHaveNoViolations()`).

## 3. Back-End Rules (API & Database)

- **Validation:** Validate all incoming request bodies, query params, and route params on the server using Zod schemas—never rely solely on front-end validation.
- **HTTP Standards:** Return consistent JSON responses and proper HTTP status codes (`200`, `201`, `400`, `401`, `403`, `404`, `500`).
- **Security:**
  - Enforce authentication and authorization checks on all protected routes.
  - Never expose raw database errors or stack traces in API responses.
  - Paginate list endpoints by default (`limit`/`offset` or cursor).

## 4. Testing & Verification Workflow

Before completing any task, run the following checks in the terminal in this exact order and fix any errors:

1. Format code: `npm run format`
2. Type-check and build: `npm run build`
3. Lint and format check: `npm run lint` (runs Oxlint with `.oxlintrc.json` rules + `prettier --check .`)
4. Run tests: `npm test` (Write Vitest + React Testing Library tests for new components, hooks, and API routes).
