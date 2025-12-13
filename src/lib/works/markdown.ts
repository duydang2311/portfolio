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
import { EXIT, visit } from 'unist-util-visit';

export function parseMarkdownToHtml(markdown: string) {
    const instance = unified()
        .use(remarkParse)
        .use(remarkGalleryContainer)
        .use(remarkGfm)
        .use(remarkRehype, {
            handlers: {
                galleryContainer: galleryContainerHandler,
            },
        })
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

function remarkGalleryContainer() {
    return (tree) => {
        visit(tree, 'paragraph', (node, index, parent) => {
            if (
                parent === tree &&
                node.children.some((a) => a.type === 'text' && a.value === ':::gallery')
            ) {
                tree.children[index] = { type: 'galleryContainer' };
                return EXIT;
            }
        });
    };
}

function remarkGalleryContainerOld() {
    return (tree) => {
        let start = -1;
        const size = tree.children.length;
        for (let i = 0; i !== size; ++i) {
            const node = tree.children[i];
            if (
                node.type === 'paragraph' &&
                node.children.some((a) => a.type === 'text' && a.value === ':::gallery')
            ) {
                start = i;
                break;
            }
        }
        const listNode = tree.children[start + 1];
        const images = [];
        if (listNode.type === 'list') {
            visit(listNode, 'image', (node) => {
                images.push({
                    title: node.title,
                    url: node.url,
                    alt: node.alt,
                });
            });
        }
        tree.children.splice(start, 2, {
            type: 'galleryContainer',
            data: {
                images,
            },
        });
    };
}

function galleryContainerHandler() {
    return {
        type: 'element',
        tagName: 'div',
        properties: {
            className: 'c-gallery-container',
        },
    };
}

function galleryContainerHandlerOld(_state, node) {
    return {
        type: 'element',
        tagName: 'div',
        properties: {
            className: 'c-gallery-container',
        },
        children: node.data.images.map((a) => ({
            type: 'element',
            tagName: 'img',
            properties: {
                src: a.url,
                alt: a.alt,
                title: a.title,
            },
        })),
    };
}
