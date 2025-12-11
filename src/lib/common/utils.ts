export const getUserPreferredColorScheme = () => {
    const colorScheme = localStorage.getItem('color_scheme');
    if (colorScheme !== 'dark' && colorScheme !== 'light') {
        return 'system';
    }
    return colorScheme;
};

export const isDarkColorScheme = (colorScheme: string) => {
	return (
		colorScheme === 'dark' ||
		(colorScheme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
	);
};
