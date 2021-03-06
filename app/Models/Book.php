<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable =[
        'title',
        'shelf_id',
        'count',
        'category_id',
        'photo',
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function shelf() {
        return $this->belongsTo(Shelf::class, 'shelf_id');
    }

    public function authors() {
        return $this->belongsToMany(Author::class);
    }

    public function readers() {
        return $this->belongsToMany(Reader::class, 'book_reader');
    }

    public function tags() {
        return $this->belongsToMany(Tag::class, 'book_reader');
    }
}
