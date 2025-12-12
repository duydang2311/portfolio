import { createHighlighterCore, type HighlighterGeneric } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

export type MarkdownLanguage = 'typescript' | 'javascript' | 'csharp' | 'svelte' | 'bash' | 'xml';
export type MarkdownTheme = 'solarized-dark';

export type MarkdownHighlighter = HighlighterGeneric<MarkdownLanguage, MarkdownTheme>;

export function createHighlighter() {
    return createHighlighterCore({
        themes: [import('@shikijs/themes/solarized-dark')],
        langs: [
            import('@shikijs/langs/javascript'),
            import('@shikijs/langs/typescript'),
            import('@shikijs/langs/csharp'),
            import('@shikijs/langs/svelte'),
            import('@shikijs/langs/bash'),
            import('@shikijs/langs/xml'),
        ],
        engine: createOnigurumaEngine(import('shiki/wasm')),
    }) as Promise<MarkdownHighlighter>;
}
