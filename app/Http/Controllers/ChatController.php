<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Throwable;
use Illuminate\Support\Facades\Http;

class ChatController extends Controller
{
    // fontend controller
    public function index(Request $request)
    {
        return Inertia::render('ChatBot/Chat', []);
    }


    // chatbot controller
    public function ask(Request $request): string
    {
        try {
            ///** @var array $response */
            $response = Http::withHeaders([
                "Content-Type" => "application/json",
                "Authorization" => "Bearer " . env('OPEN_API_KEY')
            ])->post('https://api.openai.com/v1/chat/completions', [
                "model" => $request->post('model'),
                "messages" => [
                    [
                        "role" => "user",
                        "content" => $request->post('content')
                    ]
                ],
                "temperature" => 0,
                "max_tokens" => 2048
            ])->json();
            return $response['choices'][0]['message']['content'];
        } catch (Throwable $e) {
            return "Chat GPT Limit Reached. This means too many people have used this demo this month and hit the FREE limit available. You will need to wait, sorry about that.";
        }
    }
}
