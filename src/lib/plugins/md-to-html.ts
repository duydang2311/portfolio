import MagicString from 'magic-string';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { matter } from 'vfile-matter';
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
					.use(remarkFrontmatter, { type: 'yaml', marker: '-' })
					.use(() => {
						return (_tree, file) => {
							matter(file);
						};
					})
					.use(remarkGfm)
					.use(remarkRehype, { allowDangerousHtml: true })
					.use(rehypeRaw)
					.use(rehypeStringify);

				const file = await processor.process(code);
				const s = new MagicString(
					`export const html = ${JSON.stringify(file.toString('utf-8'))};\n`
				);
				s.append(`export const meta = ${JSON.stringify(file.data.matter)};\n`);

				return {
					code: s.toString(),
					map: s.generateMap({ hires: true })
				};
			}
		}
	} satisfies PluginOption;
}
