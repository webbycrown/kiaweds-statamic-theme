<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsLetterController;
use App\Http\Controllers\BlogController;


// Route to handle newsletter subscription form submissions
Route::get('/newsLetter', [NewsLetterController::class, 'newsLetter'])->name('newsLetter');
Route::get('/blog-search', [BlogController::class, 'search'])->name('blog.search');
Route::get('/ajax-search-careers-insights', [BlogController::class, 'careersInsightsSearch'])->name('header.search');