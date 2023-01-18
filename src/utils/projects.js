const getNormalizedProject = async (project) => {
	const { frontmatter, Content, file } = project;
	const ID = file.split('/').pop().split('.').shift();

	return {
		id: ID,

		publishDate: frontmatter.publishDate,
		draft: frontmatter.draft,

		canonical: frontmatter.canonical,
		slug: frontmatter.slug || ID,

		title: frontmatter.title,
		description: frontmatter.description,
		image: frontmatter.image,

		Content: Content,
		// or 'body' in case you consume from API

		excerpt: frontmatter.excerpt,
		authors: frontmatter.authors,
		category: frontmatter.category,
		tags: frontmatter.tags,
		readingTime: frontmatter.readingTime,
	};
};

const load = async function () {
	const projects = import.meta.glob(['~/../data/projects/**/*.md', '~/../data/projects/**/*.mdx'], {
		eager: true,
	});

	const normalizedProjects = Object.keys(projects).map(async (key) => {
		const project = await projects[key];
		return await getNormalizedProject(project);
	});

	const results = (await Promise.all(normalizedProjects))
		.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf())
		.filter((project) => !project.draft);
	return results;
};

let _projects;

/** */
export const fetchProjects = async () => {
	_projects = _projects || load();

	return await _projects;
};

/** */
export const findProjectsByIds = async (ids) => {
	if (!Array.isArray(ids)) return [];

	const projects = await fetchProjects();

	return ids.reduce(function (r, id) {
		projects.some(function (project) {
			return id === project.id && r.push(project);
		});
		return r;
	}, []);
};

/** */
export const findLatestProjects = async ({ count }) => {
	const _count = count || 4;
	const projects = await fetchProjects();

	return projects ? projects.slice(_count * -1) : [];
};
