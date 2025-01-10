<?php

namespace App\Filament\Resources\GoodCaseResource\Pages;

use App\Filament\Resources\GoodCaseResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListGoodCases extends ListRecords
{
    protected static string $resource = GoodCaseResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
