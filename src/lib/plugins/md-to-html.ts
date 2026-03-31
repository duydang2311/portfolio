import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import type { PluginOption } from 'vite';

export function mdToHtml() {
	return {
		name: 'md-to-html',
		transform: {
			filter: {
				id: [/.md$/]
			},
			handler: async (code) => {
				const processor = unified()
					.use(remarkParse)
					.use(remarkGfm)
					.use(remarkRehype, { allowDangerousHtml: true })
					.use(rehypeRaw)
					.use(rehypeStringify);
				const html = String(await processor.process(code));
				return {
					code: `export default ${JSON.stringify(html)};`,
					map: null
				};
			}
		}
	} satisfies PluginOption;
}
