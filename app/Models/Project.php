<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 *
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property array $tags
 * @property string $image
 * @property string $period
 * @property int $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Project newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Project query()
 * @mixin \Eloquent
 */
class Project extends BaseModel
{
    use HasFactory;

    protected $casts = [
        'tags' => 'array'
    ];

    protected $attributes = [
        'tags' => '[]',
        'status' => false
    ];

    public function getImageAttribute()
    {
        if (!$this->attributes['image']) return '';
        return config('app.url') . '/storage/' . $this->attributes['image'];
    }
}
