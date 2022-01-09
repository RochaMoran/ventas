<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\RequestRegister;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function register(Request $request)
    {
        try {
            //validations of the inputs
            $validator = Validator::make($request->all(), [
                'name' => 'required|min:3|max:120',
                'email' => 'required|email|unique:users',
                'password' => 'required|confirmed'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 400);
            }

            //Created user if not exists errors
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = Hash::make($request->password);
            $user->facebook = $request->facebook;
            $user->google = $request->google;
            $user->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Usuario creado exitosamente",
                "user" => $user
            ], 200);

        } catch (Exception $e) {
            
            //if exists an error unexpected
            return response()->json([
                "ok" => false,
                "message" => "Ha ocurrido un error inesperado " . $e
            ], 400);
        }
    }

    public function login(Request $request)
    {
    }

    public function profile()
    {
    }

    public function logout()
    {
    }
}
