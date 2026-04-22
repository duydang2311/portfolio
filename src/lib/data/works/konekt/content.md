---
github_repo: https://github.com/duydang2311/plan-backend
medias:
  - src: https://objects.duyda.com/portfolio/konekt/01_landing.png
  - src: https://objects.duyda.com/portfolio/konekt/01_landing_dark.png
  - src: https://objects.duyda.com/portfolio/konekt/01_landing_light.png
  - src: https://objects.duyda.com/portfolio/konekt/02_tasks.png
  - src: https://objects.duyda.com/portfolio/konekt/02_tasks_dark.png
  - src: https://objects.duyda.com/portfolio/konekt/02_tasks_light.png
  - src: https://objects.duyda.com/portfolio/konekt/03_board.png
  - src: https://objects.duyda.com/portfolio/konekt/03_board_dark.png
  - src: https://objects.duyda.com/portfolio/konekt/03_board_light.png
  - src: https://objects.duyda.com/portfolio/konekt/04_checklist.gif
  - src: https://objects.duyda.com/portfolio/konekt/05_notification.png
  - src: https://objects.duyda.com/portfolio/konekt/06_search.png
  - src: https://objects.duyda.com/portfolio/konekt/07_global_search.png
---

# konekt

A comprehensive and traditional web application for task management with list view, kanban view, and timeline view.

<div data-part="media--container"></div>

## Tech Stack

### coop-cf-worker

A Cloudflare Worker that handles user-uploaded assets with proper authorization.

| Tech          | Description              |
|---------------|--------------------------|
| Language      | TypeScript               |
| Framework     | Cloudflare Workers       |

### plan-backend

The main backend for the web application, providing RESTful API with advanced response fields projection.

| Tech          | Description              |
|---------------|--------------------------|
| Language      | C#                       |
| Framework     | .NET 9, FastEndpoints    |
| Database      | PostgreSQL               |
| Messaging     | NATS                     |

### plan-go-mailer

An efficient microservice handling mail delivery.

| Tech          | Description              |
|---------------|--------------------------|
| Language      | Go                       |
| Messaging     | NATS                     |
| Email Service | Resend                   |

### plan-web

The front-facing project serving the website to user, built using cool tech.

| Tech          | Description              |
|---------------|--------------------------|
| Language      | TypeScript               |
| Framework     | Svelte 5, SvelteKit      |
| Styling       | Tailwind CSS             |
| Data Fetching | TanStack Svelte Query    |
| Real-time     | SignalR                  |
