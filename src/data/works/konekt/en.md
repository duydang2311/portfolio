# Konekt

A comprehensive and traditional web application for task management with list view, kanban view, and timeline view.

:::gallery

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
