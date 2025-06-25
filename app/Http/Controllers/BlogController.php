<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;
use Illuminate\Support\Str;
use Carbon\Carbon;
use Statamic\Facades\Form;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
   public function search(Request $request)
   {   
        // Get the search keyword from the request
    $query = $request->get('q');

        // Query blog entries from the 'blog' collection matching the title
    $entries = Entry::query()
    ->where('collection', 'blog')
    ->where(fn($q) => $q->where('title', 'like', "%$query%")
            ->orWhere('slug', 'like', "%$query%"))
            ->orderBy('updated_at', 'desc') // Sort results by last updated
            ->get()
            ->map(function ($entry) {
                $image = $entry->get('image'); // Get image field (can be array of asset IDs)
                return [
                    'title' => $entry->get('title'),
                    'short_description' => $entry->get('short_description'),
                    'slug' => $entry->slug(),
                    'url' => $entry->url(),
                    // Convert asset paths to public URLs
                    'image' =>  collect($image)->map(function ($asset) {
                        return url('assets/'.$asset);
                    })->toArray(),
                    // Format the updated date

                    'updated_at' => Carbon::createFromTimestamp($entry->get('updated_at'))->format('F j, Y'),
                    'date' =>  Carbon::createFromTimestamp($entry->get('updated_at'))->format('d'),
                    'day' =>  Carbon::createFromTimestamp($entry->get('updated_at'))->format('F'),
                ];
            });

        return response()->json($entries);  // Return as JSON response
    }

    public function careersInsightsSearch(Request $request)
    {   
        // Get query parameters from the request
        $query = $request->get('q', '');
        // 'blog', 'our_events', or 'our_services'
        $type = $request->get('type');
        // Whether to return full JSON results or view
        $full = $request->boolean('full');

         // Search in 'blog' collection by title or slug, then remove duplicates by title
        $blog = Entry::query()
        ->where('collection', 'blog')
        ->where(fn($q) => $q->where('title', 'like', "%$query%")
            ->orWhere('slug', 'like', "%$query%"))
        ->get()
        ->unique('title')
        ->values();

        // Search in 'our_events' collection by title or slug, then remove duplicates by title
        $our_events = Entry::query()
        ->where('collection', 'our_events')
        ->where(fn($q) => $q->where('title', 'like', "%$query%")
            ->orWhere('slug', 'like', "%$query%"))
        ->get()
        ->unique('title')
        ->values();

        // Search in 'our_services' collection by title or slug, then remove duplicates by title
        $our_services = Entry::query()
        ->where('collection', 'our_services')
        ->where(fn($q) => $q->where('title', 'like', "%$query%")
            ->orWhere('slug', 'like', "%$query%"))
        ->get()
        ->unique('title')
        ->values();

        // If full flag is true, return JSON with results only for the specified type
        if ($full) {
            return response()->json([
                'blog' => $type === 'blog' ? $blog : [],
                'our_events' => $type === 'our_events' ? $our_events : [],
                'our_services' => $type === 'our_services' ? $our_services : [],
            ]);
        }

        // Otherwise, return a partial view with all result types
        return view('partials.search-results', [
            'blog' => $blog,
            'our_events' => $our_events,
            'our_services' => $our_services,
            'query' => $query,
        ]);
    }
}
