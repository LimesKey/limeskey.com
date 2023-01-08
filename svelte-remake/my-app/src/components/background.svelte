<script>
	import { get_root_for_style } from "svelte/internal";
</script>

<body>
    <cat-background>
        <style>
            body {
                background-image: url("/src/assets/cat.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                background-color: lightseagreen;
                filter: blur(8px);
                -webkit-filter: blur(8px);
                position: fixed;
                width: 100%;
                height: 100%;

            }
        </style>
    </cat-background>
</body>
