<script>
    const url = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
</script>

<div class="buttons">
    <a class="btn btn-1" href="{url}">sneaky</a> 
    <a class="btn btn-2" href="{url}">apple juice</a> 
    <a class="btn btn-3" href="{url}">explanation</a> 
    <a class="btn btn-4" href="{url}">pain</a> 
    <a class="btn btn-5" href="{url}">pc</a> 

    <style>
            body{
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            }

            .container {
            display: flex;
            justify-content: center;
            align-items: center;
            align-content: center;
            flex-wrap: wrap;
            margin: auto;
            }
            .btn {
            flex: 1 1 auto;
            padding: 10px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            color: white;
            /* text-shadow: 0px 0px 10px rgba(0,0,0,0.2);*/
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            }

            /* Demo Stuff End -> */

            /* <- Magic Stuff Start */

            .btn:hover {
            background-position: right center; /* change the direction of the change here */
            }

            .btn-1 {
            background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);
            }

            .btn-2 {
            background-image: linear-gradient(to right, #fbc2eb 0%, #a6c1ee 51%, #fbc2eb 100%);
            }

            .btn-3 {
            background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%);
            }

            .btn-4 {
            background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%);
            }

            .btn-5 {
            background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 51%, #ffecd2 100%);
            }

            /* Magic Stuff End -> */
    </style>
</div>

