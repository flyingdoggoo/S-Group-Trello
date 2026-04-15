export const getCookieValue = (
	cookieHeader: string | undefined,
	cookieName: string,
): string | undefined => {
	if (!cookieHeader) {
		return undefined;
	}

	const rawCookies = cookieHeader.split(';');
	for (const rawCookie of rawCookies) {
		const [name, ...valueParts] = rawCookie.trim().split('=');
		if (name === cookieName) {
			return decodeURIComponent(valueParts.join('='));
		}
	}

	return undefined;
};
