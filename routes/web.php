<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CateringPackagesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DishController;
use App\Http\Controllers\PackageController;
use Illuminate\Support\Facades\Route;

Route::middleware(['web', 'auth:admin_users'])->group(function () {
    Route::get('/', function () {
        echo 'hasd';
    });

    Route::get('login', [AuthController::class, 'showLogin'])->name('show.login');
    Route::post('login', [AuthController::class, 'login'])->name('login');

    Route::get('forgot-password', [AuthController::class, 'showForgotPass'])->name('show.forgot-pass');

    Route::middleware('auth:admin_users')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('show.dashboard.index');
        Route::post('/logout', [AuthController::class, 'logout'])->name('logout');


        /* Category routes */
        Route::get('/categories', [CategoryController::class, 'index'])->name('show.categories');
        Route::post('/categories', [CategoryController::class, 'store'])->name('store.category');
        Route::put('/categories/{category}', [CategoryController::class, 'update'])->name('update.category');
        Route::delete('/categories/{category}', [CategoryController::class, 'destroy'])->name('delete.category');

        // Package routes
        Route::get('/packages', [PackageController::class, 'index'])->name('show.packages');
        Route::post('/packages', [PackageController::class, 'store'])->name('store.package');
        Route::put('/packages/{package}', [PackageController::class, 'update'])->name('update.package');
        Route::delete('/packages/{package}', [PackageController::class, 'destroy'])->name('destroy.package');

        // Dish routes
        Route::get('/dishes', [DishController::class, 'index'])->name('show.dishes');
        Route::post('/dishes', [DishController::class, 'store'])->name('store.dish');
        Route::put('/dishes/{dish}', [DishController::class, 'update'])->name('update.dish');
        Route::delete('/dishes/{dish}', [DishController::class, 'destroy'])->name('delete.dish');

        // Catering Packages Routes
        Route::get('/catering_packages', [CateringPackagesController::class, 'index'])->name('show.cateringPackages');
        
    });
});
