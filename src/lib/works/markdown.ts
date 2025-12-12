import type { MarkdownHighlighter } from '$lib/markdown/highlighter';
import rehypeShikiFromHighlighter from '@shikijs/rehype/core';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { Parent } from 'unist';
import { EXIT, visit } from 'unist-util-visit';

export interface ParseMarkdownToHtmlOptions {
    highlighter?: MarkdownHighlighter;
}

export function parseMarkdownToHtml(
    markdown: string,
    { highlighter = undefined }: ParseMarkdownToHtmlOptions
) {
    const instance = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeGallery)
        .use(rehypeFormat);
    if (highlighter) {
        instance.use(rehypeShikiFromHighlighter, highlighter, {
            inline: 'tailing-curly-colon',
            theme: 'solarized-dark',
        });
    }
    return instance.use(rehypeStringify).process(markdown).then(String);
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
