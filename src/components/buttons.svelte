<script>
	const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

	const buttons = [
		{ label: 'sneaky', gradient: 'bg-[linear-gradient(to_right,#f6d365_0%,#fda085_51%,#f6d365_100%)]' },
		{ label: 'apple juice', gradient: 'bg-[linear-gradient(to_right,#fbc2eb_0%,#a6c1ee_51%,#fbc2eb_100%)]' },
		{ label: 'explanation', gradient: 'bg-[linear-gradient(to_right,#84fab0_0%,#8fd3f4_51%,#84fab0_100%)]' },
		{ label: 'pain', gradient: 'bg-[linear-gradient(to_right,#a1c4fd_0%,#c2e9fb_51%,#a1c4fd_100%)]' },
		{ label: 'pc', gradient: 'bg-[linear-gradient(to_right,#ffecd2_0%,#fcb69f_51%,#ffecd2_100%)]' }
	];
</script>

<div class="flex w-full flex-wrap justify-center gap-2 sm:gap-3">
	{#each buttons as button}
		<a
			class={`flex-1 min-w-24 sm:min-w-30 rounded-lg px-3 sm:px-4 py-2 text-center text-xs sm:text-sm uppercase text-white shadow-[0_0_20px_#eee] transition-[background-position] duration-500 ease-linear bg-size-[200%] bg-position-[left_center] hover:bg-position-[right_center] ${button.gradient}`}
			href={url}
		>
			{button.label}
		</a>
	{/each}
</div>

