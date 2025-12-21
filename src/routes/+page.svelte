<script>
	import Buttons from '../components/buttons.svelte';
</script>

<svelte:head>
	<link rel="stylesheet" href="/assets/css/background-style.css" />
	<link
		href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
		rel="stylesheet"
		type="text/css"
	/>
</svelte:head>

<div class="background" aria-hidden="true"></div>

<div class="clouds" aria-hidden="true">
	<div class="cloud foreground"></div>
	<div class="cloud background"></div>
	<div class="cloud foreground"></div>
	<div class="cloud background"></div>
	<div class="cloud foreground"></div>
	<div class="cloud background"></div>
	<div class="cloud background"></div>
	<div class="cloud foreground"></div>
	<div class="cloud background"></div>
	<div class="cloud background"></div>
</div>

<main class="main">
	<section class="bubble">
		<q>Happy November!</q>
	</section>

	<section class="home">
		<div class="title-box">
			<h2>Here at Limeskey Media Group, we value our time</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus. Volutpat blandit aliquam etiam erat. Non odio euismod lacinia at quis. Fermentum leo vel orci porta non. Condimentum lacinia quis vel eros donec ac odio tempor orci. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dictum fusce ut placerat orci. Phasellus vestibulum lorem sed risus ultricies. Id cursus metus aliquam eleifend mi in. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Adipiscing bibendum est ultricies integer. Neque ornare aenean euismod elementum nisi. Facilisis mauris sit amet massa vitae tortor.
			</p>
			<div class="buttons">
				<Buttons />
			</div>
		</div>
	</section>

	<section class="sidebars">
		<aside class="sidebar sidebar-left">
			<div class="sidebar-description">
				<h2>Projects</h2>
				<p>Currently, I've been working on many projects in 2023.</p>
			</div>
		</aside>
		<aside class="sidebar sidebar-right"></aside>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Lato', sans-serif;
	}

	.main {
		display: grid;
		min-height: 100vh;
		place-items: center;
		position: relative;
	}

	.background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('/assets/cat.jpg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 90% 60%;
		background-color: aqua;
		z-index: -2;
	}

	.background::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		backdrop-filter: blur(8px);
		pointer-events: none;
	}

	.clouds {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: -1;
	}

	.cloud {
		position: absolute;
		width: 200px;
		height: 60px;
		background: #fff;
		opacity: 0.7;
		border-radius: 100px;
		filter: blur(4px);
		animation: drift 60s linear infinite;
	}

	.cloud.background {
		top: 10%;
		animation-duration: 90s;
		transform: scale(0.8);
	}

	.cloud.foreground {
		top: 30%;
		animation-duration: 45s;
	}

	.cloud:nth-child(1) { left: 5%; }
	.cloud:nth-child(2) { left: 20%; }
	.cloud:nth-child(3) { left: 35%; }
	.cloud:nth-child(4) { left: 50%; }
	.cloud:nth-child(5) { left: 65%; }
	.cloud:nth-child(6) { left: 80%; }
	.cloud:nth-child(7) { left: 10%; top: 50%; }
	.cloud:nth-child(8) { left: 25%; top: 60%; }
	.cloud:nth-child(9) { left: 55%; top: 70%; }
	.cloud:nth-child(10) { left: 85%; top: 40%; }

	@keyframes drift {
		0% { transform: translateX(-20vw); }
		100% { transform: translateX(120vw); }
	}

	.bubble {
		margin-top: 2rem;
		padding: 1.5rem 2rem;
		background: #00aabb;
		border-radius: 0.4em;
		color: #fff;
		font-style: italic;
		max-width: 480px;
		text-align: center;
	}

	.home {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: rgba(128, 128, 128, 0.8);
		border-radius: 15px;
		padding: 30px;
		max-width: 720px;
		width: 90%;
		margin: 2rem auto;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
	}

	.title-box {
		padding: 30px;
		text-align: center;
		border: 2px solid #ccc;
		border-radius: 5px;
		overflow-wrap: break-word;
		background: rgba(255, 255, 255, 0.1);
		color: #fff;
	}

	.title-box h2 {
		margin-top: 0;
		margin-bottom: 1rem;
	}

	.title-box p {
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.buttons {
		padding: 24px;
		border: 4px solid #ccc;
		border-radius: 10px;
		background: rgba(0, 0, 0, 0.1);
	}

	.sidebars {
		position: absolute;
		top: 10%;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		padding: 0 5%;
		pointer-events: none;
	}

	.sidebar {
		pointer-events: auto;
		width: 20%;
		min-width: 220px;
		background: #333;
		color: #fff;
		padding: 20px;
		border-radius: 25px;
		opacity: 0.9;
		border: 3px solid #73ad21;
		box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
	}

	.sidebar-right {
		visibility: hidden;
	}

	.sidebar-description {
		line-height: 1.4;
	}

	@media (max-width: 1024px) {
		.sidebars {
			display: none;
		}

		.home {
			margin: 1rem;
		}
	}
</style>
