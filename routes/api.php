<?php

use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\ClientController;
use App\Http\Controllers\Api\MarkController;
use App\Http\Controllers\Api\PaymentController;
use App\Http\Controllers\Api\ProviderController;
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
   
    //Marcas
    Route::get('/mark/all', [MarkController::class, 'index']);
    Route::post('/mark/create', [MarkController::class, 'store']);
    Route::get('/mark/{id}', [MarkController::class, 'show']);
    Route::post('/mark/update/{id}', [MarkController::class, 'update']);
    Route::delete('/mark/{id}', [MarkController::class, 'destroy']);
   
    //Provider
    Route::get('/provider/all', [ProviderController::class, 'index']);
    Route::post('/provider/create', [ProviderController::class, 'store']);
    Route::get('/provider/{id}', [ProviderController::class, 'show']);
    Route::post('/provider/update/{id}', [ProviderController::class, 'update']);
    Route::delete('/provider/{id}', [ProviderController::class, 'destroy']);

    //Client
    Route::get('/client/all', [ClientController::class, 'index']);
    Route::post('/client/create', [ClientController::class, 'store']);
    Route::get('/client/{id}', [ClientController::class, 'show']);
    Route::post('/client/update/{id}', [ClientController::class, 'update']);
    Route::delete('/client/{id}', [ClientController::class, 'destroy']);
    
    //Payment
    Route::get('/payment/all', [PaymentController::class, 'index']);
    Route::post('/payment/create', [PaymentController::class, 'store']);
    Route::get('/payment/{id}', [PaymentController::class, 'show']);
    Route::post('/payment/update/{id}', [PaymentController::class, 'update']);
    Route::delete('/payment/{id}', [PaymentController::class, 'destroy']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
