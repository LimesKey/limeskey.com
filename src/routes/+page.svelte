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
					min-width: 500px;
					min-height: 500px;
			
					background-color: gray;
					border-radius: 25px;
					opacity: 0.8;
				}
			</style>

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
