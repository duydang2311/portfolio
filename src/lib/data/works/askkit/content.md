---
github_repo: https://github.com/duydang2311/askkit
medias:
  - src: https://objects.duyda.com/portfolio/askkit/01_overview.gif
---

# askkit

A unified, local desktop AI chatbot that lives in your system tray, ready to launch instantly whenever you need assistance.

<div data-part="media--container"></div>

## Approaches

I wanted to build a simple desktop chatbot that could connect to many AI models through APIs and pop up quickly by just pressing a shortcut (`Win+/`). I really needed code highlighting, and it could be best achieved by parsing the syntax manually using `tree-sitter`. However, it felt like too much work and I ended up going for `tauri`, a framework that uses web front-end and is lightweight on the bundle size. Thanks to the web ecosystem, I could build a rich text editor using the least amount of work.

### Frontend

- SvelteKit
- Tailwind CSS
- Tiptap
- Vite

### Backend

- Rust
- Sqlite

### Desktop Integration

- [x] Tested on Windows only.

## Roadmap

- [x] Chat launcher (`Win+/`)
- [ ] Main application window
- [x] Google providers: Gemini.
- [x] Groq providers: Llama, GPT, etc.
- [ ] OpenAI providers: GPT-5, GPT-4, gpt-oss, etc.
