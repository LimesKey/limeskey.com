<script>
	import { onMount, onDestroy } from 'svelte';
	import Buttons from '../components/buttons.svelte';
	import Alert from '../components/Alert.svelte';
	import Sun from '../components/Sun.svelte';
	import DraggableSticker from '../components/DraggableSticker.svelte';
	import ProjectsSection from '../components/ProjectsSection.svelte';
	import { sunStore } from '$lib/stores';

	// reactive sun data
	let sunData;
	$: sunData = $sunStore;

	onMount(() => {
		sunStore.initialize();
	});

	onDestroy(() => {
		sunStore.destroy();
	});
</script>

<svelte:head>
	<title>LimesKey Media Group</title>
</svelte:head>

<div class="relative min-h-screen overflow-hidden text-white">
	<!-- alert at top -->
	<Alert />

	<!-- draggable sticker -->
	<DraggableSticker borderColor={sunData.color} />

	<!-- bg -->
	<div class="fixed inset-0 -z-10" aria-hidden="true">
		<div
			class="absolute inset-0 bg-[url('/assets/cat.jpg')] bg-cover bg-center sm:bg-position-[90%_60%] bg-cyan-400"
		></div>
		<div class="absolute inset-0 backdrop-blur-sm"></div>
	</div>

	<!-- sun gets darker/warmer at night -->
	<div class="fixed top-4 left-4 sm:top-8 sm:left-8 z-10 pointer-events-none" aria-hidden="true">
		<Sun color={sunData.color} isNight={sunData.isNight} />
	</div>

	<!-- clouds at bottom -->
	<div
		class="clouds-legacy fixed bottom-0 left-0 right-0 z-0 h-[38%] w-full"
		aria-hidden="true"
		style="position: fixed; bottom: 0; left: 0; right: 0; width: 100%; height: 38%; z-index: 0;"
	>
		{#each Array.from({ length: 10 }) as _, i}
			<div
				class="cloud-legacy {i % 2 === 0 ? 'foreground' : 'background'} {i >= 5 ? 'hidden sm:block' : ''}"
				style="animation-delay:-{18 + i * 18.5}s; bottom:{i * 10}%"
			></div>
		{/each}
	</div>

	<!-- Main Content -->
	<main class="relative flex min-h-screen flex-col items-center justify-center gap-4 sm:gap-8 px-4 py-8">
		<!-- Hero Section -->
		<section class="w-full">
			<div
				class="mx-auto my-4 flex w-full max-w-2xl justify-center rounded-3xl p-4 sm:p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur border-2 bg-linear-to-br from-[#0f172a]/80 via-[#0d1c2f]/80 to-[#0a0f1a]/80"
				style="border-color: {sunData.color};"
			>
				<div class="w-full rounded-xl px-3 sm:px-6 md:px-8 py-4 sm:py-6 text-center">
					<h2 class="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold leading-tight text-white">
						Here at Limeskey Media Group, we value our time
					</h2>
					<p class="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-white/80">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum
						lorem sed risus. Volutpat blandit aliquam etiam erat. Non odio euismod lacinia at quis.
						Fermentum leo vel orci porta non. Condimentum lacinia quis vel eros donec ac odio tempor
						orci. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dictum fusce ut
						placerat orci. Phasellus vestibulum lorem sed risus ultricies. Id cursus metus aliquam
						eleifend mi in. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis
						orci. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Adipiscing
						bibendum est ultricies integer. Neque ornare aenean euismod elementum nisi. Facilisis
						mauris sit amet massa vitae tortor.
					</p>
					<div class="rounded-xl border border-white/15 bg-white/5 p-4 sm:p-6 backdrop-blur">
						<Buttons />
					</div>
				</div>
			</div>
		</section>

		<!-- Projects Section -->
		<ProjectsSection borderColor={sunData.color} />
	</main>
</div>
