<?php

namespace App\Filament\Resources;

use App\Filament\Resources\GoodCaseResource\Pages;
use App\Filament\Resources\GoodCaseResource\RelationManagers;
use App\Models\GoodCase;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class GoodCaseResource extends Resource
{
    protected static ?string $model = GoodCase::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $modelLabel = 'Доброе дело';
    protected static ?string $pluralModelLabel = 'Добрые дела';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('author')
                    ->label('Автор')
                    ->required()
                    ->maxLength(255),
                Forms\Components\Textarea::make('description')
                    ->label('Описание')
                    ->required(),
                Forms\Components\Textarea::make('job')
                    ->label('Род деятельности')
                    ->required(),
                Forms\Components\TextInput::make('likes')
                    ->label('Лайки')
                    ->required()
                    ->numeric(),
                Forms\Components\Toggle::make('status')
                    ->label('Включено')
                    ->required(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('author')
                    ->label('Автор')
                    ->searchable(),
                Tables\Columns\TextColumn::make('description')
                    ->label('Описание')
                    ->limit(50)
                    ->searchable(),
                Tables\Columns\TextColumn::make('job')
                    ->label('Род деятельности')
                    ->limit(50)
                    ->searchable(),
                Tables\Columns\TextColumn::make('likes')
                    ->label('Лайки')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\IconColumn::make('status')
                    ->label('Включено')
                    ->boolean(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListGoodCases::route('/'),
            'create' => Pages\CreateGoodCase::route('/create'),
            'edit' => Pages\EditGoodCase::route('/{record}/edit'),
        ];
    }
}
