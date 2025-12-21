<script>
	import { GITHUB_USER, PROJECTS_TO_DISPLAY, REPOS_PER_PAGE } from '$lib/constants';
	import { formatDate } from '$lib/utils';
	import { onMount } from 'svelte';

	export let borderColor = '#ffffff';

	let projects = [];
	let loading = true;
	let error = '';

	// grab my projects from github
	async function fetchProjects() {
		loading = true;
		error = '';
		const apiBase = 'https://api.github.com';

		try {
			const repoRes = await fetch(
				`${apiBase}/users/${GITHUB_USER}/repos?sort=updated&per_page=${REPOS_PER_PAGE}`
			);
			
			if (!repoRes.ok) {
				throw new Error(`Repos request failed: ${repoRes.status}`);
			}

			const repos = await repoRes.json();
			const owned = (repos ?? []).filter((repo) => repo?.owner?.login === GITHUB_USER);
			const topRepos = owned.slice(0, PROJECTS_TO_DISPLAY);

			const enriched = await Promise.all(
				topRepos.map(async (repo) => {
					try {
						const [commitRes, languagesRes] = await Promise.all([
							fetch(`${apiBase}/repos/${repo.full_name}/commits?author=${GITHUB_USER}&per_page=1`),
							fetch(`${apiBase}/repos/${repo.full_name}/languages`)
						]);

						if (!commitRes.ok) throw new Error('commit fetch failed');
						
						const commitData = await commitRes.json();
						const latest = commitData?.[0];

						let languagesList = [];
						if (languagesRes.ok) {
							const languagesObj = await languagesRes.json();
							languagesList = Object.entries(languagesObj)
								.sort(([, a], [, b]) => b - a)
								.map(([lang]) => lang)
								.slice(0, 2);
						}

						return {
							name: repo.name,
							description: repo.description ?? 'No description yet.',
							repoUrl: repo.html_url,
							languages: languagesList,
							stars: repo.stargazers_count ?? 0,
							commitMessage: latest?.commit?.message ?? 'No recent commit found',
							commitDate: latest?.commit?.author?.date ?? repo.pushed_at,
							commitUrl: latest?.html_url ?? repo.html_url
						};
					} catch (err) {
						return {
							name: repo.name,
							description: repo.description ?? 'No description yet.',
							repoUrl: repo.html_url,
							languages: repo.language ? [repo.language] : [],
							stars: repo.stargazers_count ?? 0,
							commitMessage: 'Latest commit unavailable',
							commitDate: repo.pushed_at,
							commitUrl: repo.html_url
						};
					}
				})
			);

			projects = enriched;
		} catch (err) {
			error = 'Could not load GitHub projects right now.';
			console.error(err);
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		fetchProjects();
	});
</script>

<section
	class="relative w-full max-w-500 self-start rounded-3xl border-2 bg-linear-to-br from-[#0f172a]/80 via-[#0d1c2f]/80 to-[#0a0f1a]/80 p-4 sm:p-6 md:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2 lg:w-md ml-0 sm:ml-15"
	aria-labelledby="projects-heading"
	style="border-color: {borderColor};"
>
	<div class="space-y-1">
		<h2 id="projects-heading" class="text-xl sm:text-2xl font-semibold tracking-tight">Projects</h2>
		<p class="text-xs sm:text-sm text-white/70">Latest GitHub repos where I've shipped code.</p>
	</div>

	{#if loading}
		<div class="mt-6 grid grid-cols-1 gap-4">
			{#each Array.from({ length: 3 }) as _}
				<div
					class="animate-pulse rounded-2xl border border-white/5 bg-white/5 p-5 min-h-55 flex flex-col gap-3"
				>
					<div class="mb-3 h-6 w-1/2 rounded bg-white/15"></div>
					<div class="flex flex-wrap gap-2">
						<div class="h-6 w-20 rounded-full bg-white/10"></div>
						<div class="h-6 w-24 rounded-full bg-white/10"></div>
					</div>
					<div class="h-12 rounded bg-white/10"></div>
					<div class="mt-auto space-y-2">
						<div class="h-3 w-5/6 rounded bg-white/10"></div>
						<div class="h-3 w-2/3 rounded bg-white/10"></div>
					</div>
				</div>
			{/each}
		</div>
	{:else if error}
		<div
			class="mt-6 flex flex-col gap-4 rounded-2xl border border-red-400/30 bg-red-500/10 p-5 text-sm text-red-50"
		>
			<p>{error}</p>
			<button
				type="button"
				class="w-fit rounded-lg border border-red-300/40 px-3 py-2 text-xs uppercase tracking-wide text-red-100 transition hover:border-red-200/80"
				on:click={fetchProjects}
			>
				Try again
			</button>
		</div>
	{:else}
		<div class="mt-6 grid grid-cols-1 gap-4">
			{#each projects as project}
				<article
					class="group relative flex flex-col gap-2 sm:gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-white/25"
				>
					<div class="relative">
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noreferrer"
							class="block pr-12 sm:pr-16 text-base sm:text-lg font-semibold text-white transition group-hover:text-lime-200"
						>
							{project.name}
						</a>
						<div
							class={`absolute right-0 top-0 flex items-center gap-1 sm:gap-1.5 rounded-full border border-white/10 bg-white/10 px-1.5 sm:px-2 py-0.5 sm:py-1 ${project.stars > 0 ? 'text-amber-300' : 'text-white/60'}`}
						>
							<span class="text-lg sm:text-2xl leading-none -mt-px" aria-hidden="true">★</span>
							<span class="text-xs sm:text-sm font-semibold leading-none">{project.stars}</span>
							<span class="sr-only">stars</span>
						</div>
					</div>
					{#if project.languages?.length}
						<div class="flex flex-wrap gap-1.5 sm:gap-2 text-2xs sm:text-xs uppercase tracking-wide text-white/70">
							{#each project.languages as lang}
								<span class="rounded-full border border-white/15 bg-white/5 px-2 sm:px-3 py-0.5 sm:py-1">{lang}</span>
							{/each}
						</div>
					{/if}
					<p class="text-xs sm:text-sm leading-relaxed text-white/80">{project.description}</p>
					<div class="mt-auto space-y-1 text-xs sm:text-sm text-white/70">
						<div class="flex items-start gap-2">
							<span class="text-white/50 text-2xs sm:text-xs">Commit</span>
							<a
								href={project.commitUrl}
								target="_blank"
								rel="noreferrer"
								class="line-clamp-2 text-white transition hover:text-lime-200"
							>
								{project.commitMessage}
							</a>
						</div>
						<div class="flex items-center gap-2 text-2xs sm:text-xs uppercase tracking-wide text-white/50">
							<span>Committed</span>
							<span>{formatDate(project.commitDate)}</span>
						</div>
					</div>
				</article>
			{/each}
		</div>
	{/if}
</section>
