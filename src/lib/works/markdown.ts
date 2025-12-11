import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import wasm from 'shiki/onig.wasm?init';
import { unified } from 'unified';
import type { Parent } from 'unist';
import { EXIT, visit } from 'unist-util-visit';

const highlighter = await createHighlighterCore({
    themes: [import('@shikijs/themes/solarized-dark')],
    langs: [
        import('@shikijs/langs/javascript'),
        import('@shikijs/langs/typescript'),
        import('@shikijs/langs/csharp'),
        import('@shikijs/langs/svelte'),
        import('@shikijs/langs/sh'),
        import('@shikijs/langs/xml'),
    ],
    engine: createOnigurumaEngine(wasm),
});

export function parseMarkdownToHtml(markdown: string) {
    return unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeGallery)
        .use(rehypeFormat)
        .use(rehypeShikiFromHighlighter, highlighter, {
            inline: 'tailing-curly-colon',
            theme: 'solarized-dark',
        })
        .use(rehypeStringify)
        .process(markdown)
        .then(String);
}

function rehypeGallery() {
    return (tree: any) => {
        visit(tree as Parent, 'element', (node: any) => {
            if (node.tagName === 'p') {
                if (node.children.some((a: any) => a.type === 'text' && a.value === ':gallery:')) {
                    const className = 'c-work-gallery-container';
                    node.tagName = 'div';
                    node.children = [];
                    if (!node.properties.class) {
                        node.properties.class = className;
                    } else {
                        node.properties.class = `${node.properties.class} ${className}`;
                    }
                    return EXIT;
                }
            }
        });
    };
}
