import slugify from 'limax';

import { SITE, PROJECTS, RESUME } from '~/config.mjs';

const trim = (str, ch) => {
	let start = 0,
		end = str.length || 0;
	while (start < end && str[start] === ch) ++start;
	while (end > start && str[end - 1] === ch) --end;
	return start > 0 || end < str.length ? str.substring(start, end) : str;
};

const trimSlash = (s) => trim(trim(s, '/'));
const createPath = (...params) => {
	const paths = params.filter((el) => !!el).join('/');
	return '/' + paths + (SITE.trailingSlash && paths ? '/' : '');
};

const basePathname = trimSlash(SITE.basePathname);

export const cleanSlug = (text) => slugify(trimSlash(text));

export const PROJECTS_BASE = cleanSlug(PROJECTS?.projects?.pathname);
export const PROJECT_BASE = cleanSlug(PROJECTS?.project?.pathname);

/** */
export const getCanonical = (path = '') => new URL(path, SITE.origin);

/** */
export const getPermalink = (slug = '', type = 'page') => {
	const _slug = cleanSlug(slug);

	switch (type) {
		case 'project':
			return createPath(basePathname, PROJECT_BASE, _slug);

		case 'page':
		default:
			return createPath(basePathname, _slug);
	}
};

/** */
export const getHomePermalink = () => {
	const permalink = getPermalink();
	return permalink !== '/' ? permalink + '/' : permalink;
};

/** */
export const getRelativeLink = (link = '') => {
	return createPath(basePathname, trimSlash(link));
};

/** */
export const getProjectsPermalink = () => getPermalink(PROJECTS_BASE);

/** */
export const getResumePermalink = () => `/${RESUME.pathname}`;
