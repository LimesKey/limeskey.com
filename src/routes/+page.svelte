<script>
	import { end_hydrating, fix_position } from "svelte/internal";
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
		<style>
			.main {
					display: flex;
					min-height: 100vh;
					min-height: 100vw;
					justify-content: center;
					align-items: center; 
				}
		</style>

		<div class="home">
			<style>	
				.home {
					display: flex;
					background-color: gray;
					border-radius: 15px;		
					opacity: 0.8;
					padding: 20px;
					max-width: 50%;

					margin-left: auto;
					margin-right: auto;
				}
			</style>

			<div class="title-box">
				<style>
					.title-box {
						padding: 20px;
						text-align: center;
						border: 2px solid #ccc;
						border-radius: 5px;
						overflow-wrap: break-word;
						padding: 10px;
					}
				</style>
				<h2>Here at Limeskey Media Group, we value our time</h2>
				<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus. Volutpat blandit aliquam etiam erat. Non odio euismod lacinia at quis. Fermentum leo vel orci porta non. Condimentum lacinia quis vel eros donec ac odio tempor orci. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dictum fusce ut placerat orci. Phasellus vestibulum lorem sed risus ultricies. Id cursus metus aliquam eleifend mi in. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Adipiscing bibendum est ultricies integer. Neque ornare aenean euismod elementum nisi. Facilisis mauris sit amet massa vitae tortor.</h3>
				<div class="buttons">
					<style>
						.buttons {		
							padding: 19px;
							border: 4px solid #ccc;
							border-radius: 10px;
						}
					</style>
					<svelte:component this={buttons}/>
				</div>
			</div>
		</div>
			
		<background>
			<style>
				.background {
					min-width: 100%;
					min-height: 100%;
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
	</main>
</body>
