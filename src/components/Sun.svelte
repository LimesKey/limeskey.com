<script>
	// sun/moon that changes color throughout the day and shows rays
	export let color = '#ffffff';
	export let isNight = false;
</script>

<div class="sun-with-rays relative w-24 h-24" class:night={isNight}>
	<!-- Soft radial/conic rays behind the core -->
	<div class="sun-rays absolute inset-0" aria-hidden="true"></div>

	<!-- Core + glow -->
	<div
		class="sun-core absolute inset-0 rounded-full"
		style="background-color: {color}; box-shadow: 0 0 60px rgba(255,235,180,0.35); border: 2px solid {color};"
	></div>
	<div
		class="sun-glow absolute inset-2 rounded-full"
		style="background: radial-gradient(circle at 30% 30%, rgba(255,255,220,0.9), {color});"
	></div>
</div>
