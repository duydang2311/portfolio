---
github_repo: https://github.com/duydang2311/fullest-web
medias:
  - src: https://objects.duyda.com/portfolio/fullest-web/fullest-web-task-list.png
---

# fullest-web

A task management platform designed for public collaboration.

<div data-part="media--container"></div>

## Tech Stack

### API (`/api`)

The core backend service, providing robust APIs for data management and business logic. It follows a hybrid of Clean Architecture and Vertical Slice Architecture principles.

| Category       | Technology                        |
| -------------- | --------------------------------- |
| Language       | C#                                |
| Framework      | .NET 9, ASP.NET Core              |
| API            | FastEndpoints                     |
| Database       | PostgreSQL, Entity Framework Core |
| Authentication | JWT, Google OAuth                 |

### Website (`/www`)

The user-facing web application, built for dynamic and responsive user experiences.

| Category   | Technology   |
| ---------- | ------------ |
| Language   | TypeScript   |
| Framework  | SvelteKit    |
| Styling    | Tailwind CSS |
| Build Tool | Vite         |

### Assets service (`/workers-assets`)

Serverless functions and edge computing for asset handling.

| Category | Technology         |
| -------- | ------------------ |
| Language | TypeScript         |
| Platform | Cloudflare Workers |
| Storage  | Cloudflare R2, KV  |

## Deployment

| Component                   | Platform            |
| --------------------------- | ------------------- |
| API (`/api`)                | Azure App Container |
| Database                    | Neon DB (Free Tier) |
| Frontend (`/www`)           | Cloudflare Workers  |
| Workers (`/workers-assets`) | Cloudflare Workers  |

## Contributing

Contributions are always welcome. Feel free to reach out if you have any questions.

Happy coding!
