<script>
	import { fix_position } from "svelte/internal";
	import buttons from '/src/components/bubble.svelte';
</script>

<head>
	<link rel="stylesheet" href="assets/css/background-style.css" />
	<link
		href="https://fonts.googleapis.com/css?family=Lato:300,400,700"
		rel="stylesheet"
		type="text/css"
	/>
</head>

<body>
	<div class="background" />
		<div class="Clouds">
		<div class="Cloud Foreground" />
		<div class="Cloud Background" />
		<div class="Cloud Foreground" />
		<div class="Cloud Background" />
		<div class="Cloud Foreground" />
		<div class="Cloud Background" />
		<div class="Cloud Background" />
		<div class="Cloud Foreground" />
		<div class="Cloud Background" />
		<div class="Cloud Background" />
	</div>

	<main>
		<div class="home">
			<style>
				main {
					min-width: 100%;
					min-height: 100vh;
			
					display: grid;
					place-content: center;
				}

			
				.home {
					max-width: 40%;
					margin: auto;
					display: flex;
					background-color: gray;
					border-radius: 15px;
					opacity: 0.8;
					padding: 20px;
					position:relative;
					max-height: 110%;
				}
			</style>

			<div class="title">
				<style>
					.title {
						padding: 20px;
						display: grid;
						place-content: center;
						text-align: center;
						position:relative;
						border: 2px solid #ccc;
						min-height: 110%;
						margin: auto;
						min-width: 90%;
						border-radius: 5px;
					}
				</style>
				<h1>Here are Limeskey Media Group, we value our time</h1>
				<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus. Volutpat blandit aliquam etiam erat. Non odio euismod lacinia at quis. Fermentum leo vel orci porta non. Condimentum lacinia quis vel eros donec ac odio tempor orci. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dictum fusce ut placerat orci. Phasellus vestibulum lorem sed risus ultricies. Id cursus metus aliquam eleifend mi in. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Adipiscing bibendum est ultricies integer. Neque ornare aenean euismod elementum nisi. Facilisis mauris sit amet massa vitae tortor.</h2>
				<div class="buttons">
					<style>
						.buttons {
							display: table;
							margin: auto;
							justify-content: center;
							padding: 19px;
							resize: horizontal;
							border: 4px solid #ccc;
							border-radius: 10px;
						}
					</style>
				<svelte:component this={buttons}/>
				</div>
		</div>
			<background>
				<style>
					.background {
						min-width: 100%;
						min-height: 100%;
						display: fill;
						background-size: cover;
						position: fixed;
						background-image: url("/assets/cat.jpg");
						background-repeat: no-repeat;
						background-color: aqua;
						z-index: -2;
						background-position: 90%, 60%; 
					}

					.background:after {
						content: "";
						width: 100%;
						height: 100%;
						backdrop-filter: blur(8px);
						pointer-events: none;
						position: absolute;
						white-space: nowrap;
						overflow: hidden;
						display: flex;
					}
				</style>
			</background>
		</div>
	</main>
</body>
