<script>
	import { onMount } from 'svelte';
	import { ALERT_AUTO_DISMISS_MS, ALERT_CLOSE_ANIMATION_MS } from '$lib/constants';

	export let title = 'Announcement';
	export let message = 'Happy Holidays.';
	export let badge = 'CONSOLE';

	let visible = false;
	let closing = false;
	let hovered = false;
	let timerId;
	let alertEl;

	// timer to auto-hide the alert
	function startTimer() {
		clearTimer();
		if (typeof window === 'undefined') return;
		
		timerId = window.setTimeout(() => {
			dismiss();
		}, ALERT_AUTO_DISMISS_MS);
	}

	function clearTimer() {
		if (timerId) {
			clearTimeout(timerId);
			timerId = undefined;
		}
	}

	function dismiss() {
		if (!visible || closing) return;
		closing = true;
		clearTimer();

		setTimeout(() => {
			visible = false;
			closing = false;
		}, ALERT_CLOSE_ANIMATION_MS);
	}

	// click outside = close
	function handleDocumentClick(event) {
		if ((!visible && !closing) || !alertEl) return;
		if (alertEl.contains(event.target)) return;
		dismiss();
	}

	// pause timer on hover
	function handleMouseEnter() {
		hovered = true;
		clearTimer();
	}

	function handleMouseLeave() {
		hovered = false;
		if (visible) startTimer();
	}

	onMount(() => {
		visible = true;
		startTimer();

		if (typeof document !== 'undefined') {
			document.addEventListener('click', handleDocumentClick);
		}

		return () => {
			if (typeof document !== 'undefined') {
				document.removeEventListener('click', handleDocumentClick);
			}
			clearTimer();
		};
	});
</script>

<div
	class="site-alert"
	class:hidden={!visible && !closing}
	class:closing
	bind:this={alertEl}
	role="alert"
	aria-live="assertive"
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<div class="site-alert__glow" aria-hidden="true"></div>
	<div class="site-alert__body">
		<div class="site-alert__badge">{badge}</div>
		<div class="site-alert__text">
			<p class="site-alert__title">{title}</p>
			<p class="site-alert__message">{message}</p>
		</div>
		<button
			type="button"
			class="site-alert__close"
			on:click|stopPropagation={dismiss}
			title="Dismiss alert"
		>
			<span aria-hidden="true">✕</span>
		</button>
	</div>
	<div class="site-alert__scanlines" aria-hidden="true"></div>
</div>
