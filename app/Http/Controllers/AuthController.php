<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLogin()
    {
        if (Auth::guard('admin_users')->check()) {
            return redirect()->route('show.dashboard.index')->with('message', 'You are already logged in');
        }

        return view('pages.auth.log-in', ['title' => 'Login']);
    }

    public function showForgotPass()
    {
        return view('pages.auth.forgot-pass', ['title' => 'Forgot Password']);
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if (Auth::guard('admin_users')->attempt($credentials)) {
            return redirect()->route('show.dashboard.index')->with([
                'success' => 'Login successful.',
            ]);
        }

        return redirect()->route('login.show')->with('error', 'Invalid login credentials.');
        
    
    }

    public function logout(Request $request)
    {
        Auth::guard('admin_users')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('show.login')->with('success', 'Logged out successfully.');
    }
}
