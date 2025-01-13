<?php

namespace App\Http\Controllers\Api;

use App\Models\Faq;
use App\Models\GoodCase;
use App\Models\Project;
use App\Models\Setting;

class SettingsController extends Controller
{
    public function index()
    {
        $response = [];

        foreach (Setting::all() as $item) {
            $response['content'][$item->code] = $item->value;
        }

        $response['projects'] = Project::where('status', true)->get();
        $response['cases'] = GoodCase::where('status', true)->get();
        $response['faqs'] = Faq::all();
        return response()->json($response);
    }
}
