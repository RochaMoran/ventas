<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Laravel\Socialite\Facades\Socialite;

class GoogleController extends Controller
{
    function login () {
        return Socialite::with('google')->stateless()->redirect();
    }

    function callback () {
        $user = Socialite::with('google')->stateless()->user();
        $userExist = User::where("email", "=", $user->email)->first();

        if(isset($userExist->id)) {
            if(User::where('external_id', $user->external_id)->where('google', true)->first()) {
                $token = $userExist->createToken("auth_token")->plainTextToken;

                return response()->json([
                    "ok" => true,
                    "message" => "Inicio de sesion exitoso",
                    "token" => $token
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El id del usuario no coincide"
                ], 400);
            }
        } else {
            $newUser = new User();
            $newUser->name = $user->name;
            $newUser->email = $user->email;
            $newUser->external_id = $user->id;
            $newUser->google = true;
            $newUser->save();
            $token = $newUser->createToken("auth_token")->plainTextToken;
    
            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Usuario creado exitosamente",
                "token" => $token
            ], 200);
        }
    }
}
