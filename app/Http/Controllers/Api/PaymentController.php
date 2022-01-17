<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Payment;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PaymentController extends Controller
{
    public function index()
    {
        try {
            $payments = Payment::all();

            if ($payments->isEmpty()) {
                return response()->json([
                    'ok' => false,
                    'message' => 'Aún no se ha creado ningun tipo de pago. !Crea uno ya¡'
                ]);
            } else {
                return response()->json([
                    'ok' => true,
                    'data' => $payments
                ]);
            }
        } catch (Exception $e) {
            return response()->json([
                'ok' => false,
                'message' => $e
            ]);
        }
    }

    public function store(Request $request)
    {
        try {
            //validations of the inputs
            $validator = Validator::make($request->all(), [
                'name_payment' => 'required|min:3|max:120'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $payment = new Payment();
            $payment->name_payment = $request->name_payment;
            $payment->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Tipo de pago creado exitosamente",
                "data" => $payment
            ], 200);
        } catch (Exception $e) {
            //if exists an error unexpected
            return response()->json([
                "ok" => false,
                "message" => "Ha ocurrido un error inesperado " . $e
            ], 400);
        }
    }

    public function show($id)
    {
        try {
            //verificated if exists errors
            if (empty($id)) {
                return response()->json([
                    "ok" => false,
                    "message" => "Favor, seleccione el elemento a mostrar"
                ], 200);
            }

            $payment = Payment::where("id", "=", $id)->first();

            if ($payment) {
                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Tipo de pago encontrada exitosamente",
                    "data" => $payment
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El tipo de pago que buscas no existe"
                ], 200);
            }
        } catch (Exception $e) {
            //if exists an error unexpected
            return response()->json([
                "ok" => false,
                "message" => "Ha ocurrido un error inesperado " . $e
            ], 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            //validations of the inputs
            $validator = Validator::make($request->all(), [
                'name_payment' => 'required|min:3|max:120'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $payment = Payment::where("id", "=", $id)->first();

            if($payment) {
                $payment->name_payment = $request->name_payment;
                $payment->save();
    
                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Tipo de pago editado exitosamente",
                    "data" => $payment
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El tipo de pago que intentas editar no existe"
                ], 200);
            }
        } catch (Exception $e) {
            //if exists an error unexpected
            return response()->json([
                "ok" => false,
                "message" => "Ha ocurrido un error inesperado " . $e
            ], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $payment = Payment::where("id", "=", $id)->first();
            
            if($payment) {
                $payment->delete();

                return response()->json([
                    "ok" => true,
                    "message" => "Tipo de pago eliminado exitosamente"
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El tipo de pago que intentas eliminar no existe"
                ], 200);
            }
        } catch (Exception $e) {
            //if exists an error unexpected
            return response()->json([
                "ok" => false,
                "message" => "Ha ocurrido un error inesperado " . $e
            ], 400);
        }
    }
}
