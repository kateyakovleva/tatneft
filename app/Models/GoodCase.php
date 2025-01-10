<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 *
 *
 * @property int $id
 * @property string $author
 * @property string $description
 * @property int $likes
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|GoodCase newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GoodCase newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|GoodCase query()
 * @mixin \Eloquent
 */
class GoodCase extends BaseModel
{
    use HasFactory;

    protected $attributes = [
        'status' => false,
        'likes' => 0,
    ];
}
