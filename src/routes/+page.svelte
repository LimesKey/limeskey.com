<script>

	import { fix_position } from "svelte/internal";

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
					width: 1000px;
					min-height: 500px;
			
					background-color: gray;
					border-radius: 25px;
					opacity: 0.8;
					padding: 20px;
				}
			</style>

			<div class="title">
				<style>
					.title {
						display: grid;
						place-content: center;
						text-align: center;

						border: 2px solid #ccc;
						width: 40%;
						min-height: 90%;
						margin: auto;
						
					}
				</style>
			<h1>Here are Limeskey Media Group, we value our time</h1>
			<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed risus. Volutpat blandit aliquam etiam erat. Non odio euismod lacinia at quis. Fermentum leo vel orci porta non. Condimentum lacinia quis vel eros donec ac odio tempor orci. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dictum fusce ut placerat orci. Phasellus vestibulum lorem sed risus ultricies. Id cursus metus aliquam eleifend mi in. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Purus ut faucibus pulvinar elementum integer enim neque volutpat ac. Adipiscing bibendum est ultricies integer. Neque ornare aenean euismod elementum nisi. Facilisis mauris sit amet massa vitae tortor.</h2>
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
						backdrop-filter: blur(10px);
						pointer-events: none;
						position: fixed;
						white-space: nowrap;
						overflow: hidden;
						display: flex;
					}
				</style>
			</background>
		</div>
	</main>
</body>
