<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Detail_Facture;
use App\Models\Facture;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FactureController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            // return response()->json($request);
            //validations of the inputs
            $validator = Validator::make($request->all(), [
                'total_facture' => 'required|min:3|max:120',
                'date_facture' => 'required',
                'id_client' => 'required',
                'id_payment' => 'required',
                'products' => 'required'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $facture = new Facture();
            $facture->total_facture = $request->total_facture;
            $facture->date_facture = $request->date_facture;
            $facture->id_client = $request->id_client;
            $facture->id_payment = $request->id_payment;
            $facture->save();

            $products = $request->products;

            foreach($products as $item) {
                $detailFacture = new Detail_Facture();

                $detailFacture->fill([
                    "subtotal" => $item["subtotal"],
                    "price" => $item["price"],
                    "cant" => $item["cant"],
                    "id_facture" => $facture["id"],
                    "id_product" => $item["id_product"],
                ]);
                    
                $detailFacture->saveOrFail();
            }

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Factura creado exitosamente",
                "data" => $facture
            ], 200);
        } catch (Exception $e) {
            //if exists an error unexpected
            return response()->json([
                "ok" => false,
                "message" => "Ha ocurrido un error inesperado " . $e
            ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
