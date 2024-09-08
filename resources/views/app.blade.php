@php
    $authTitles = ['Login', 'Forgot Password'];
    $dashboardTitles = ['Dashboard', 'Categories', 'Packages', 'Dishes', 'Reservations'];

    $auth = in_array($title, $authTitles);
    $dashboard = in_array($title, $dashboardTitles);
@endphp

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    @if ($auth)
        @vite('resources/css/auth.css')
    @elseif ($dashboard)
        @vite('resources/css/dashboard.css')
    @endif
</head>

<body class="hold-transition @yield('body-class')">
    @if ($auth)
        @yield('content')
    @elseif ($dashboard)
        <div class="wrapper">
            @include('components.preloader')
            @include('components.navbar')
            @include('components.sidebar')
            <div class="content-wrapper">
                @include('components.header')
                <section class="content">
                    @yield('content')
                </section>
            </div>
        </div>
    @endif

    @if ($auth)
        @vite('resources/js/auth.js')
    @elseif ($dashboard)
        @vite('resources/js/dashboard.js')
    @endif
</body>

</html>
