<?php


namespace App\Services;

use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class Frontend
{
    public function handle()
    {
        $html = '';
        if (is_file(public_path('index.html'))) {
            $html = file_get_contents(public_path('index.html'));
        }
        if (is_file(public_path('index.csr.html'))) {
            $html = file_get_contents(public_path('index.csr.html'));
        }

        if (!$html) {
            throw new HttpException(404, (new NotFoundHttpException)->getMessage());
        }

        return response($html);
    }
}
