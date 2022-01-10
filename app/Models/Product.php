<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'name_product',
        'price_product',
        'margin_gain',
        'stock_product',
        'id_category',
        'id_mark',
        'id_provider',
    ];

    public function categories () {
        return $this->belongsTo('App\Models\Category');
    }

    public function marks () {
        return $this->belongsTo('App\Models\Mark');
    }

    public function providers () {
        return $this->belongsTo('App\Models\Provider');
    }

    public function detail_factures () {
        return $this->hasMany('App\Models\Detail_Facture');
    }
}
