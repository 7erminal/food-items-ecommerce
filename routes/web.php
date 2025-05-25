<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/products', function () {
    return view('products');
});

Route::get('/view-product', function (Request $request) {
    $item_id = $request->item_id;

    Log::debug("Item ID is ");
    Log::debug($item_id);

    return view('productView')->with('data', $item_id);
});

Route::get('/cart', function () {
    return view('cart');
});

Route::get('/checkout', function () {
    return view('checkout');
});

Route::get('/invoice', function () {
    return view('invoice');
});

Route::get('/about-us', function () {
    return view('aboutUs');
});

Route::get('/sustainability', function () {
    return view('sustainability');
});

Route::get('/recipes', function () {
    return view('recipes');
});
