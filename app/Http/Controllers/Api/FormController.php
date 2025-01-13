<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\FormRequest;
use App\Mail\SendFormEmail;
use App\Models\GoodCase;
use App\Models\Setting;
use Mail;

class FormController extends Controller
{
    public function form(FormRequest $request)
    {
        $email = Setting::findByCode('email')->value;

        Mail::to($email)
            ->send(new SendFormEmail($request));

        GoodCase::create(['author' => $request->name, 'description' => $request->description, 'job' => $request->job]);

        return response()->json();
    }
}
