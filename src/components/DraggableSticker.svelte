<script>
	import { STICKER_SIZE, MARGIN, STICKER_LOAD_DELAY_MS, SCALE_NORMAL, SCALE_ENLARGED, SCALE_ANIMATION_QUICK_MS, SCALE_ANIMATION_SLOW_MS } from '$lib/constants';
	import { animateValue } from '$lib/utils';
	import { onMount } from 'svelte';

	export let borderColor = '#ffffff';

	let x = 0;
	let y = MARGIN;
	let dragging = false;
	let moved = false;
	let movedEver = false;
	let loaded = false;
	let hydrated = false;

	let startX = 0;
	let startY = 0;
	let baseX = 0;
	let baseY = 0;

	let scale = SCALE_NORMAL;
	let cancelAnimation;

	function animateScale(target, duration) {
		if (typeof window === 'undefined') return;
		if (cancelAnimation) cancelAnimation();
		
		cancelAnimation = animateValue(scale, target, duration, (value) => {
			scale = value;
		});
	}

	function onMouseDown(e) {
		if (!loaded) return;
		dragging = true;
		startX = e.clientX;
		startY = e.clientY;
		baseX = x;
		baseY = y;

		// scale up if already moved
		if (moved) {
			animateScale(SCALE_ENLARGED, SCALE_ANIMATION_QUICK_MS);
		} else {
			animateScale(SCALE_NORMAL, SCALE_ANIMATION_QUICK_MS);
		}

		if (typeof window !== 'undefined') {
			window.addEventListener('mousemove', onMouseMove);
			window.addEventListener('mouseup', onMouseUp);
		}
	}

	function onMouseMove(e) {
		if (!dragging) return;
		const dx = e.clientX - startX;
		const dy = e.clientY - startY;
		x = baseX + dx;
		y = baseY + dy;

		// detect if user actually moved it
		if (!moved && (Math.abs(dx) > 2 || Math.abs(dy) > 2)) {
			moved = true;
			movedEver = true;
			animateScale(SCALE_ENLARGED, SCALE_ANIMATION_QUICK_MS);
		}
	}

	function onMouseUp() {
		dragging = false;
		animateScale(SCALE_NORMAL, SCALE_ANIMATION_SLOW_MS);

		if (typeof window !== 'undefined') {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
		}

		// reset state for next interaction
		setTimeout(() => {
			moved = false;
		}, 0);
	}

	onMount(() => {
		hydrated = true;

		if (typeof window !== 'undefined') {
			x = window.innerWidth - MARGIN - STICKER_SIZE;
		}

		setTimeout(() => {
			loaded = true;
		}, STICKER_LOAD_DELAY_MS);

		return () => {
			if (cancelAnimation) cancelAnimation();
		};
	});
</script>

<div
	class="sticker-container"
	role="button"
	tabindex="0"
	style="
		left: {x}px;
		top: {y}px;
		transform: scale({scale});
		opacity: {hydrated ? (dragging && moved ? 0.7 : 1) : 0};
		visibility: {hydrated ? 'visible' : 'hidden'};
		cursor: {loaded ? 'grab' : 'default'};
	"
	on:mousedown={onMouseDown}
>
	<img
		src="https://cdn.discordapp.com/avatars/418543945551708163/586aa9b057af7585efd87a5efe1f8600.png?size=512"
		alt="Discord Profile"
		class="h-32 w-32 rounded-full border-4 shadow-2xl animate-[slap_1.2s_ease-out_forwards]"
		draggable="false"
		style="pointer-events: none; user-select: none; border-color: {borderColor};"
	/>

	{#if loaded && !dragging && !movedEver}
		<span class="sticker-label">LimesKey</span>
	{/if}
</div>
