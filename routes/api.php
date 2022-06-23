<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Author
Route::prefix('/author')->controller(\App\Http\Controllers\Api\AuthorController::class)->group(function () {
    Route::post('/', 'create');
    Route::get('/{id}', 'read');
    Route::post('/{id}', 'update');
    Route::delete('/{id}', 'delete');
    Route::get('/', 'list');
});

//Book
Route::prefix('/books')->controller(\App\Http\Controllers\Api\BookController::class)->group(function () {
    Route::post('/', 'create');
    Route::get('/{id}', 'read');
    Route::post('/{id}', 'update');
    Route::delete('/{id}', 'delete');
    Route::get('/', 'list');
});

//Category
Route::prefix('/category')->controller(\App\Http\Controllers\Api\CategoryController::class)->group(function () {
    Route::post('/', 'create');
    Route::get('/{id}', 'read');
    Route::post('/{id}', 'update');
    Route::delete('/{id}', 'delete');
    Route::get('/', 'list');
});

//Reader
Route::prefix('/reader')->controller(\App\Http\Controllers\Api\ReaderController::class)->group(function () {
    Route::post('/', 'create');
    Route::get('/{id}', 'read');
    Route::post('/{id}', 'update');
    Route::delete('/{id}', 'delete');
    Route::get('/', 'list');
});

//Shelf
Route::prefix('/shelf')->controller(\App\Http\Controllers\Api\ShelfController::class)->group(function () {
    Route::post('/', 'create');
    Route::get('/{id}', 'read');
    Route::post('/{id}', 'update');
    Route::delete('/{id}', 'delete');
    Route::get('/', 'list');
});

//Tag
Route::prefix('/tag')->controller(\App\Http\Controllers\Api\TagController::class)->group(function () {
    Route::post('/', 'create');
    Route::get('/{id}', 'read');
    Route::post('/{id}', 'update');
    Route::delete('/{id}', 'delete');
    Route::get('/', 'list');
});

