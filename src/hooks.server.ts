export const handle = async ({ event, resolve }) => {
	let theme = event.cookies.get('theme') as 'light' | 'dark' | 'system' | null;
	if (theme == null || (theme !== 'light' && theme !== 'dark')) {
		theme = 'system';
	}
	event.locals.theme = theme;
	if (theme === 'dark' || theme === 'system') {
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		});
	}
	return resolve(event);
};
