import bash from 'highlight.js/lib/languages/bash';
import csharp from 'highlight.js/lib/languages/csharp';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import svelte from 'highlight.svelte';
import rehypeFormat from 'rehype-format';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { Parent } from 'unist';
import { EXIT, visit } from 'unist-util-visit';

export function parseMarkdownToHtml(markdown: string) {
    const instance = unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeGallery)
        .use(rehypeHighlight, {
            languages: {
                javascript,
                typescript,
                csharp,
                svelte,
                xml,
                bash,
            },
        })
        .use(rehypeFormat);
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
