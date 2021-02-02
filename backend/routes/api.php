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

Route::prefix('salary')->group(function(){
    Route::get('/','\App\Http\Controllers\SalaryController@index');
    Route::get('/{id}','\App\Http\Controllers\SalaryController@show');
    Route::post('/','\App\Http\Controllers\SalaryController@store');
    Route::put('/{id}','\App\Http\Controllers\SalaryController@update');
    Route::delete('/{id}','\App\Http\Controllers\SalaryController@destroy');
});

Route::prefix('employee')->group(function(){
    Route::get('/','EmployeeController@index');
    Route::post('/','EmployeeController@store');
    Route::get('/show/{id}','EmployeeController@show');
    Route::get('/{id}','EmployeeController@edit');
    Route::put('/{id}','EmployeeController@update');
    Route::delete('/{id}','EmployeeController@destroy');
    Route::post('/{keyword}','EmployeeController@search');
});


//POSITION

Route::prefix('positions')->group(function(){
  Route::get('/','\App\Http\Controllers\PositionController@index');
  Route::post('/','\App\Http\Controllers\PositionController@store');
  Route::get('/show/{id}','\App\Http\Controllers\PositionController@show');
  Route::get('/{id}','\App\Http\Controllers\PositionController@edit');
  Route::put('/{id}','\App\Http\Controllers\PositionController@update');
  Route::delete('/{id}','\App\Http\Controllers\PositionController@destroy');
  Route::post('/{position}','\App\Http\Controllers\PositionController@search');



});

// jwt-authenticate api
Route::group(['middleware' => ['jwt.verify']], function() {
    Route::get('user', '\App\Http\Controllers\UserController@getAuthenticatedUser');

});
Route::post('login', '\App\Http\Controllers\UserController@authenticate');
Route::post('lognup', '\App\Http\Controllers\UserController@register');
