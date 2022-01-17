<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Provider;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\isEmpty;

class ProviderController extends Controller
{
    public function index()
    {
        try {
            $providers = Provider::all();

            if ($providers->isEmpty()) {
                return response()->json([
                    'ok' => false,
                    'message' => 'Aún no se ha creado ninguna proveedor. !Crea una ya¡'
                ]);
            } else {
                return response()->json([
                    'ok' => true,
                    'data' => $providers
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
                'name_provider' => 'required|min:3|max:120',
                'phone_provider' => 'required|min:5|max:20',
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $provider = new Provider();
            $provider->name_provider = $request->name_provider;
            $provider->phone_provider = $request->phone_provider;
            $provider->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Proveedor creado exitosamente",
                "data" => $provider
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

            $provider = Provider::where("id", "=", $id)->first();

            if ($provider) {
                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Proveedor encontrado exitosamente",
                    "data" => $provider
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El proveedor que buscas no existe"
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
                'name_provider' => 'required|min:3|max:120',
                'phone_provider' => 'required|min:5|max:20',
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $provider = Provider::where("id", "=", $id)->first();

            if ($provider) {
                $provider->name_provider = $request->name_provider;
                $provider->phone_provider = $request->phone_provider;
                $provider->save();

                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Proveedor editado exitosamente",
                    "data" => $provider
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El proveedor que intentas editar no existe"
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
            $provider = Provider::where("id", "=", $id)->first();

            if ($provider) {
                $provider->delete();

                return response()->json([
                    "ok" => true,
                    "message" => "Proveedor eliminado exitosamente"
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El proveedor que intentas eliminar no existe"
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
