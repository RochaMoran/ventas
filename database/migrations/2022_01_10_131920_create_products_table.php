<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name_product');
            $table->double('price_product');
            $table->decimal('margin_gain');
            $table->integer('stock_product');
            $table->unsignedBigInteger('id_category')->nullable;
            $table->unsignedBigInteger('id_mark')->nullable;
            $table->unsignedBigInteger('id_provider')->nullable;

            $table->foreign('id_category')->references('id')->on('categories')->onDelete('cascade');
            $table->foreign('id_mark')->references('id')->on('marks')->onDelete('cascade');
            $table->foreign('id_provider')->references('id')->on('providers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
