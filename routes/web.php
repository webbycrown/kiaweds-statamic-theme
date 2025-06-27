<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsLetterController;
use App\Http\Controllers\BlogController;
use Statamic\Facades\Site;

Site::all()->each(function (Statamic\Sites\Site $site) {
	Route::prefix($site->url())->group(function () {
		Route::statamic('/blog/category/{category_slug}', 'category');
		Route::statamic('/services/category/{category_slug}', 'category');
	});
});

// Route to handle newsletter subscription form submissions
Route::get('/newsLetter', [NewsLetterController::class, 'newsLetter'])->name('newsLetter');
Route::get('/blog-search', [BlogController::class, 'search'])->name('blog.search');
Route::get('/services-search', [BlogController::class, 'servicesSearch'])->name('services.search');
Route::get('/events-search', [BlogController::class, 'eventsSearch'])->name('events.search');
Route::get('/ajax-search-careers-insights', [BlogController::class, 'careersInsightsSearch'])->name('header.search');