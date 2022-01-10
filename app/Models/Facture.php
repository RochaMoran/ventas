<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'total_facture',
        'date_facture',
        'id_client',
        'id_payment'
    ];

    public function clients () {
        return $this->belongsTo('App\Models\Client');
    }

    public function payments () {
        return $this->belongsTo('App\Models\Payment');
    }

    public function detail_factures () {
        return $this->hasMany('App\Models\Detail_Facture');
    }
}
