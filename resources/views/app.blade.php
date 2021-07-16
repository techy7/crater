<!DOCTYPE html>
<html lang="en" class="h-full">

<head>
    <title>Techy7 - Invoicing Platform</title>
    <script src="/assets/js/pace/pace.js"></script>
    <link href="{{mix("/assets/css/crater.css")}}" rel="stylesheet" type="text/css">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap" rel="stylesheet">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/favicons/site-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/img/favicons/site-icon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/img/favicons/site-icon.png">
    <link rel="manifest" href="/assets/img/favicons/site.webmanifest">
    <link rel="mask-icon" href="/assets/img/favicons/safari-pinned-tab.svg" color="#5851d8">
    <link rel="shortcut icon" href="/assets/img/favicons/site-icon.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="/assets/img/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body class="h-full overflow-x-hidden bg-gray-100 layout-default skin-crater font-base">
    <div id="app" class="h-full">
        <router-view></router-view>
    </div>
    <script type="text/javascript" src="{{mix('/assets/js/app.js')}}"></script>
</body>

</html>
