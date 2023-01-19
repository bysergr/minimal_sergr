export const SITE = {
	name: 'Sergio Rey',

	origin: 'https://sergr.vercel.app/',
	basePathname: '/',
	trailingSlash: false,

	title: 'Sergio Rey - Personal Website',
	description: 'This is my personal website using Astro and Tailwind CSS.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: true,
	postsPerPage: 5,

	blog: {
		disabled: false,
		pathname: 'blog',
	},

	post: {
		disabled: false,
		pathname: 'blog',
	},
};

export const PROJECTS = {
	disabled: false,
	amountPerPage: 5,

	projects: {
		disabled: false,
		pathname: 'projects',
	},

	project: {
		disabled: false,
		pathname: 'projects',
	},
};

export const RESUME = {
	pathname: 'resume.pdf',
};
