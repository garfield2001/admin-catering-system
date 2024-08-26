<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function showLoginPage(Request $request)
    {

        if ($request->ajax()) {
            return response()->json([
                'page' => view('pages.log-in')->render()
            ]);
        }

        return view('pages.log-in');
    }
    public function showForgotPassPage(Request $request)
    {

        if ($request->ajax()) {
            return response()->json([
                'page' => view('pages.forgot-pass')->render()
            ]);
        }

        return view('pages.forgot-pass');
    }

    public function loginUser(Request $request)
    {
        return response()->json([
            'attempt' => Auth::guard('admin_users')->attempt($request->validate([
                'username' => 'required|string',
                'password' => 'required|string',
            ])),
            'isAjax' => $request->ajax(),
            'page' => route('show.dashboard.page')
        ]);
    }
    public function logout(Request $request)
    {
        Auth::guard('admin_users')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect()->route('show.login.page')->with('success', 'Logged out successfully.');
    }
}
