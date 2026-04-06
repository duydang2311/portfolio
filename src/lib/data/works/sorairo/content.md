---
github_repo: https://github.com/duydang2311/portfolio
medias:
  - src: https://objects.duyda.tech/portfolio/sorairo-demo-video.mp4
  - src: https://objects.duyda.tech/portfolio/sorairo/sorairo-macos.mov
  - src: https://objects.duyda.tech/portfolio/sorairo-light.png
  - src: https://objects.duyda.tech/portfolio/sorairo-dark.png
  - src: https://objects.duyda.tech/portfolio/sorairo-compact.png
  - src: https://objects.duyda.tech/portfolio/sorairo-mini.png
---

# sorairo

A minimal, local, cross-platform music player built with Avalonia and miniaudio.

<div data-part="media--container"></div>

## Approaches

### GUI Framework

My goal was to build a cross-platform music player app that is highly customizable and optimized for resource usage. At this point, any WebView/CEF framework is out of the table. And I went to try a few frameworks in Rust and C# and built POC in each of them.

| Framework   | Language | Verdict | Description                                                                                                                                                                                                                                                                                                                                           |
| ----------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| egui        | Rust     | ❌      | A well-known immediate-mode GUI framework in Rust community but it doesn't suit a music player app that is intended for running in the background most of the time. I'm keeping a branch for the egui version of this app and idle CPU usage was the reason why I migrated away from this framework.                                                  |
| fltk-rs     | Rust     | ❌      | Best performance (~8mb RAM, ~0% CPU in my POC version with `fltk-rs`). However, it is hard and troublesome to do layout properly, achieve a modern UI look and a reactive style codebase.                                                                                                                                                             |
| Avalonia UI | C#       | ✅      | The sweet spot. It is retained, cross-platform, and performant enough that resizing doesn't cause flickering. The app currently stays at 30-70MB memory footprint and ~0.8% idle CPU. And it's future-proofing for my visualizer feature in the future where I need to do low-level rendering. I find it pretty impressive for what it is capable of. |

### Playback Engine

For the audio playback, I chose miniaudio, a robust cross-platform library in C that supports `.mp3`, `.ogg`, `.wav` at the cost of just a header file. To use it in C#, I'm using an existing C# library that provides bindings to the functions in C.

## Roadmap

I've pulled the first usable cross-platform version recently. And there are lots of work to be done still.

- [x] Responsive GUI with Avalonia
- [x] Cross-platform playback with miniaudio
- [x] File metadata read (ATL.NET)
- [ ] File metadata write utilities (ATL.NET)
- [x] Playback modes: shuffle, repeat.
- [ ] Adding sources from YouTube (yt-dlp on-demand)
- [ ] Basic audio visualization
- [ ] Discord RPC option
- [ ] Drag and drop songs
- [ ] Audio normalization (embedded rsgain)
- [ ] Release packaging (Velopack)
- [x] Light & dark mode

## Performance

Ran on my win-x64 with the following results:

| Metric                  | Value  |
| :---------------------- | :----- |
| Startup time            | ~1s    |
| Memory usage (startup)  | ~35 MB |
| Memory usage (20 songs) | ~43 MB |
| Memory usage (playback) | ~50 MB |
| CPU usage (idle)        | ~0%    |
| CPU usage (playback)    | ~0.5%  |
