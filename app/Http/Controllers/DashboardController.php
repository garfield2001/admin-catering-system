<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\AdminUser;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        // Retrieve the authenticated user
        $user = Auth::user();

        return view("pages.dashboard.index", [
            'title' => 'Dashboard',
            'user' => $user
        ]);
    }
}
