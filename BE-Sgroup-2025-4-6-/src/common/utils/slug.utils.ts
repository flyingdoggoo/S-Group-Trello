const DEFAULT_FALLBACK_SLUG = 'item';

export const toSlug = (
	value: string,
	fallback: string = DEFAULT_FALLBACK_SLUG,
): string => {
	const normalized = value
		.trim()
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

	return normalized || fallback;
};
