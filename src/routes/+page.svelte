<script>
	import buttons from '$lib/components/buttons.svelte';
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
	<bubble>
		<style>
			.bubble {
				position: fixed;
				background: #00aabb;
				border-radius: 0.4em;
			}
		</style>

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
	</bubble>

	<embeds>
		<style lange="postcss">
			.embeds {
				:global(html) {
					position: absolute;
					z-index: -1;
					display: inline-block;
					align: bottom;
					right: 10%;
				}
			}
		</style>

		<figure>
			<embed
				src="https://wakatime.com/share/@f7db4c5e-9dd7-4181-aa0a-cad5f52d5ee2/1f2a9238-569a-40a4-8923-7512e420ae6d.svg"
			/>
		</figure>
	</embeds>

	<!--
		<hackclub>
			<style>
				.hackclub {
					position: absolute;
				}
			</style>

			<embed src=https://assets.hackclub.com/flag-orpheus-left.svg>
		</hackclub>
	
		uh fix later -->

	<div class="quote">
		<q>Happy November!</q>
		<style>
			.quote {
				padding: 70px;
				display: flex;
				font-style: italic;
				justify-content: center;
				color: white;
				font: Georgia;
				font-size: 200%;
			}
		</style>
	</div>

	<main>
		<style>
			.main {
				display: grid;

				min-height: 100vh;
				min-height: 100vw;
				justify-content: center;
				align-items: center;
				align-content: middle;
				margin: auto;
			}
		</style>

		<div class="home" style="">
			<style>
				.home {
					display: flex;
					justify-content: center;
					align-items: center;
					background-color: gray;
					border-radius: 15px;
					opacity: 0.8;
					padding: 30px;
					max-width: 40%;
					margin: auto;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					z-index: 100;
				}
			</style>

			<div class="title-box">
				<style>
					.title-box {
						padding: 30px;
						text-align: center;
						border: 2px solid #ccc;
						border-radius: 5px;
						overflow-wrap: break-word;
					}
				</style>
				<h2>Here at Limeskey Media Group, we value our time</h2>
				<h3>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Iaculis eu non diam phasellus vestibulum lorem sed
					risus. Volutpat blandit aliquam etiam erat. Non odio euismod lacinia at quis. Fermentum
					leo vel orci porta non. Condimentum lacinia quis vel eros donec ac odio tempor orci.
					Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Dictum fusce ut placerat
					orci. Phasellus vestibulum lorem sed risus ultricies. Id cursus metus aliquam eleifend mi
					in. Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Purus ut
					faucibus pulvinar elementum integer enim neque volutpat ac. Adipiscing bibendum est
					ultricies integer. Neque ornare aenean euismod elementum nisi. Facilisis mauris sit amet
					massa vitae tortor.
				</h3>
				<br />
				<div class="buttons">
					<style>
						.buttons {
							padding: 30px;
							border: 4px solid #ccc;
							border-radius: 10px;
						}
					</style>
					<svelte:component this={buttons} />
				</div>
			</div>
		</div>

		<sidebars>
			<style>
				.sidebar_left {
					display: flex;
					position: absolute;
					width: 20%;
					border: 3px solid #73ad21;
					height: 70%;
					background: #333;
					color: #fff;
					padding: 20px;
					border-radius: 25px;
					align: center;
					opacity: 0.9;
					margin-left: 5%;

					text-align: middle;
				}

				.sidebar_right {
					display: flex;
					position: absolute;
					padding: 20px;
					align: center;
				}

				.sidebar_description {
					line-height: 1.4;
				}
			</style>
			<div class="sidebar_left">
				<div class="sidebar_description">
					<h2>Projects</h2>
					<p1> Currently, I've been working on many projects in 2023. </p1>
				</div>
			</div>

			<div class="sidebar_right" />
		</sidebars>

		<background>
			<style>
				.background {
					min-width: 100%;
					min-height: 100%;
					background-size: cover;
					position: fixed;
					background-image: url('/assets/cat.jpg');
					background-repeat: no-repeat;
					background-color: aqua;
					z-index: -2;
					border: 2px;
					background-position: 90%, 60%;
				}

				.background:after {
					content: '';
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
