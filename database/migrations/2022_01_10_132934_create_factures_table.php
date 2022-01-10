<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFacturesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('factures', function (Blueprint $table) {
            $table->id();
            $table->double('total_facture');
            $table->date('date_facture');
            $table->unsignedBigInteger('id_client');
            $table->unsignedBigInteger('id_payment');

            $table->foreign('id_client')->references('id')->on('clients')->onDelete('cascade');
            $table->foreign('id_payment')->references('id')->on('payments')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('factures');
    }
}
