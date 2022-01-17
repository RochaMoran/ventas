<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\isEmpty;

class ClientController extends Controller
{
    public function index()
    {
        try {
            $clients = Client::all();

            if ($clients->isEmpty()) {
                return response()->json([
                    'ok' => false,
                    'message' => 'Aún no se ha creado ninguna cliente. !Crea una ya¡'
                ]);
            } else {
                return response()->json([
                    'ok' => true,
                    'data' => $clients
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
                'name_client' => 'required|min:3|max:120',
                'phone_client' => 'required|min:5|max:20',
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $client = new Client();
            $client->name_client = $request->name_client;
            $client->phone_client = $request->phone_client;
            $client->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Cliente creado exitosamente",
                "data" => $client
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

            $client = Client::findOrFail($id);

            if (isEmpty($client)) {
                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Cliente encontrado exitosamente",
                    "data" => $client
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El Cliente que buscas no existe"
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
                'name_client' => 'required|min:3|max:120',
                'phone_client' => 'required|min:5|max:20',
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $client = Client::findOrFail($id);
            $client->name_client = $request->name_client;
            $client->phone_client = $request->phone_client;
            $client->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Cliente editado exitosamente",
                "data" => $client
            ], 200);
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
            $client = Client::findOrFail($id);
            $client->delete();

            return response()->json([
                "ok" => true,
                "message" => "Cliente eliminado exitosamente"
            ], 200);
        } catch (Exception $e) {
            //if exists an error unexpected
            return response()->json([
                "ok" => false,
                "message" => "Ha ocurrido un error inesperado " . $e
            ], 400);
        }
    }
}
