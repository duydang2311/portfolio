---
github_repo: https://github.com/hcmute-human
medias:
  - src: https://objects.duyda.com/portfolio/human/human_login.png
  - src: https://objects.duyda.com/portfolio/human/human_departments.png
  - src: https://objects.duyda.com/portfolio/human/human_employee_details.png
  - src: https://objects.duyda.com/portfolio/human/human_employee_perms.png
  - src: https://objects.duyda.com/portfolio/human/human_jobs_create.png
  - src: https://objects.duyda.com/portfolio/human/human_job_details.png
---

# human

An HR management web app for managing employees, departments, jobs, leave requests, holidays, and user profiles through a Remix-powered dashboard.

<div data-part="media--container"></div>

## Approaches

I originally started this project with Next.js, but kept running into issues that made the app harder to move forward with. One of them, [an issue I opened on the Next.js repository](https://github.com/vercel/next.js/issues/55885), is still open. Switching to Remix was a relief: its routing model felt simpler for this kind of dashboard, and each route could keep its data loading, mutations, redirects, and validation close together. I could keep the server-driven parts of the app without having to structure everything around React Server Components.

The app is built around authenticated dashboard routes. It talks to a .NET API through a small server-side API client, stores access and refresh tokens in Remix cookie sessions, and refreshes tokens automatically when needed.

## Features

- [x] Login and logout
- [x] Password reset flow
- [x] Authenticated dashboard layout
- [x] Employee listing, creation, editing, profile, positions, and permissions
- [x] Department listing, creation, settings, positions, and statistics
- [x] Job listing, creation, and details
- [x] Leave applications with create, review, update, and delete actions
- [x] Holiday and leave type management
- [x] User profile page with avatar upload
- [x] Light/dark theme switch
- [x] Internationalized route text through `i18next`

## Frontend

- Remix
- React
- TypeScript
- Tailwind CSS
- React Aria Components
- Headless UI
- Heroicons
- Tiptap
- Framer Motion

## Backend Integration

- Custom Express server for Remix
- Cookie-based session storage
- JWT decoding for user identity
- API client wrapper around `fetch`
- Automatic refresh-token retry on `401`
- External API configured through `API_BASE_URL`

## Development

```sh
npm install
npm run dev
```

The development server runs Remix through the custom Express server.

## Environment

```sh
API_BASE_URL=
COOKIE_SECRET=
```

API_BASE_URL should point to the HR backend API. COOKIE_SECRET is required for encrypted Remix cookie sessions.

## Production

```sh
npm run build
npm start
```

## Scripts

- `npm run dev` - start the development server
- `npm run build` - build the Remix app
- `npm start` - run the production Express server
- `npm run typecheck` - run TypeScript checks
