# askkit

A unified, local desktop AI chatbot that lives in your system tray, ready to launch instantly whenever you need assistance.

![explorer_KlCpP77Oqr](https://github.com/user-attachments/assets/fd5481b2-ae8e-4969-b07f-3ef0c9bfa15c)

## Approaches

I wanted to build a simple desktop chatbot that could connect to many AI models through APIs and pop up quickly by just pressing a shortcut (`Win+/`). I really needed code highlighting, and it could be best achieved by parsing the syntax manually using `tree-sitter`. However, it felt like too much work and I ended up going for `tauri`, a framework that uses web front-end and is lightweight on the bundle size. Thanks for the web ecosystem, I could build a rich text editor using the least amount of work.

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
