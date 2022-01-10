<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name_provider',
        'phone_provider'
    ];

    public function products () {
        return $this->hasMany('App\Models\Product');
    }
}
