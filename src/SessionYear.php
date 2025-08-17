<?php

namespace Laravelwebdev\SessionYear;

use Illuminate\Http\Request;
use Laravel\Nova\Nova;
use Laravel\Nova\Tool;

class SessionYear extends Tool
{
    /**
     * Perform any tasks that need to happen when the tool is booted.
     */
    public function boot(): void
    {
        Nova::mix('session-year', __DIR__.'/../dist/mix-manifest.json');
        Nova::provideToScript([
            'session_year' => function() {
                return [
                    'year' => session('year'),
                ];
            }
        ]);
    }

    /**
     * Build the menu that renders the navigation links for the tool.
     */
    public function menu(Request $request)
    {
        return null;
    }
}
