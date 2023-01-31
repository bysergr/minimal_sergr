export const SITE = {
	name: 'Sergio Rey',

	origin: 'https://sergr.vercel.app/',
	basePathname: '/',
	trailingSlash: false,

	title: 'Sergio Rey - Personal Website',
	description: 'This is my Personal WebSite using Astro and Tailwind CSS.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '',
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
