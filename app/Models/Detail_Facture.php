<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail_Facture extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'cant',
        'subtotal',
        'id_facture',
        'id_product'
    ];

    public function factures () {
        return $this->belongsTo('App\Models\Facture');
    }

    public function products () {
        return $this->belongsTo('App\Models\Product');
    }
}
