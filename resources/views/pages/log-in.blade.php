@extends('layouts.auth')

@section('title', 'Login')

@section('body-class', 'login-page')

@section('content')
    <div class="login-box">
        <div class="card card-outline card-primary">
            <div class="card-header text-center">
                <h1><b>ZEK CATERING</b></h1>
            </div>
            <div class="card-body">
                <p class="login-box-msg">Sign in to start your session.</p>
                <form action="{{ route('login') }}" method="post">
                    @csrf
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Username">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fa-solid fa-user"></span>
                            </div>
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <input type="password" class="form-control" placeholder="Password">
                        <div class="input-group-append">
                            <div class="input-group-text">
                                <span class="fas fa-lock"></span>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-8">
                            <div class="icheck-primary">
                                <input type="checkbox" id="remember">
                                <label for="remember">
                                    Remember Me
                                </label>
                            </div>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn btn-outline-primary btn-block">Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="card-footer text-center">
                <p class="mt-3 mb-1">
                    <a href="{{ route('show.recoverPass.page') }}">Forgot your password?</a>
                </p>
            </div>
        </div>
    </div>
@endsection
