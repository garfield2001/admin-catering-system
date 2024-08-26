<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use SebastianBergmann\CodeCoverage\Report\Html\Dashboard;

/* Route::get('/', function () {
    return view('welcome');
}); */

Route::middleware('web')->group(function () {
    Route::get('/', function () {
        return redirect('login');
    });

    Route::get('login', [AuthController::class, 'showLoginPage'])->name('show.login.page');
    Route::post('login', [AuthController::class, 'loginUser'])->name('login');

    Route::get('recover-password', [AuthController::class, 'showForgotPassPage'])->name('show.recoverPass.page');

    

    Route::middleware('auth:admin_users')->group(function () {
        Route::get('dashboard', [DashboardController::class, 'index'])->name('show.dashboard.page');
        Route::post('logout', [AuthController::class, 'logout'])->name('logout');
    });
});
