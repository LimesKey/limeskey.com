<script>
	import '../app.css';

	const buildBranch = __BUILD_BRANCH__;
	const buildCommit = __BUILD_COMMIT__;
</script>

<slot />

<div
	class="pointer-events-none fixed right-5 bottom-3 z-50 select-none font-mono text-base tracking-wide text-white/85"
>
	{buildBranch}@{buildCommit}
</div>
