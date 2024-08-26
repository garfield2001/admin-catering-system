<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLoginPage()
    {
        return view('pages.log-in');
    }

    public function showForgotPassPage()
    {
        return view('pages.recover-pass');
    }
    
    public function loginUser(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required|string',
            'password' => 'required|string',
        ]);

        if (Auth::guard('admin_users')->attempt($credentials)) {
            $response = [
                'success' => true,
                'redirect' => route('show.dashboard.page'),
            ];

            if ($request->ajax()) {
                return response()->json($response);
            }

            return redirect()->route('show.dashboard.page')->with('success', 'Login successful.');
        }

        $response = [
            'success' => false,
            'message' => 'Invalid login credentials.',
        ];

        if ($request->ajax()) {
            return response()->json($response, 401);
        }

        return redirect()->route('show.login.page')->with('error', $response['message']);
    }
    public function logout(Request $request)
    {
        Auth::guard('admin_users')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('show.login.page')->with('success', 'Logged out successfully.');
    }
}