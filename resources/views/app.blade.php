@php
    $authPage = $title === 'Login' || $title === 'Forgot Password';
    $dashboardPage = $title === 'Dashboard';
@endphp

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title')</title>
    @if ($authPage)
        @vite('resources/css/auth.css')
    @elseif ($dashboardPage)
        @vite('resources/css/dashboard.css')
    @endif
</head>

<body class="hold-transition @yield('body-class')">
    @if ($authPage)
        @yield('content')
    @elseif ($dashboardPage)
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
    @if ($authPage)
        @vite('resources/js/auth.js')
    @elseif ($dashboardPage)
        @vite('resources/js/dashboard.js')
    @endif
</body>

</html>
