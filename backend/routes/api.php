<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('employee')->group(function(){
    Route::get('/','EmployeeController@index');
    Route::post('/','EmployeeController@store');
    Route::get('/{id}','EmployeeController@show');
    Route::put('/{id}','EmployeeController@update');
    Route::delete('/{id}','EmployeeController@destroy');
});
