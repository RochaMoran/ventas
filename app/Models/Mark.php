<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mark extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name_mark'
    ];

    public function products () {
        return $this->hasMany('App\Models\Product');
    }
}
