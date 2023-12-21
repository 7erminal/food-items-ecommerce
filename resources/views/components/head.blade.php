<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="au theme template">
    <meta name="author" content="Hau Nguyen">
    <meta name="keywords" content="au theme template">

    <!-- Title Page-->
    <title>e-Commerce</title>

     <!-- Bootstrap CSS-->
     <link href="{{ asset('bootstrap-5.0.2-dist/css/bootstrap.min.css') }}" rel="stylesheet" media="all">
     <link href="{{ asset('assets/css/app_desktop.css') }}" rel="stylesheet" media="all">
     <link href="{{ asset('assets/css/app_mobile.css') }}" rel="stylesheet" media="all">
     <link href="{{ asset('assets/css/app_tablet.css') }}" rel="stylesheet" media="all">

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @vite('resources/css/app.css')
</head>