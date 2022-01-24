<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDetailFacturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('detail__factures', function (Blueprint $table) {
            $table->id();
            $table->double('price');
            $table->double('subtotal');
            $table->integer('cant');
            $table->unsignedBigInteger('id_facture');
            $table->unsignedBigInteger('id_product');

            $table->foreign('id_facture')->references('id')->on('factures')->onDelete('cascade');
            $table->foreign('id_product')->references('id')->on('products')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('detail__factures');
    }
}
