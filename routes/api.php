<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//Auth with google
Route::get('/login-google', [GoogleController::class, 'login']);
Route::get('/google-callback', [GoogleController::class, 'callback']);

//Auth user
Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'login']);

//Routes protected
Route::group(['middleware' => ["auth:sanctum"]], function () {
    Route::get('profile', [UserController::class, 'profile']);
    Route::get('logout', [UserController::class, 'logout']);

    //Categories
    Route::get('/category/all', [CategoryController::class, 'index']);
    Route::post('/category/create', [CategoryController::class, 'store']);
    Route::get('/category/{id}', [CategoryController::class, 'show']);
    Route::post('/category/update/{id}', [CategoryController::class, 'update']);
    Route::delete('/category/{id}', [CategoryController::class, 'destroy']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
