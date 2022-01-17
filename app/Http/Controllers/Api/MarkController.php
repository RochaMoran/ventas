<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Mark;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\isEmpty;

class MarkController extends Controller
{
    public function index()
    {
        try {
            $marks = Mark::all();

            if ($marks->isEmpty()) {
                return response()->json([
                    'ok' => false,
                    'message' => 'Aún no se ha creado ninguna marca. !Crea una ya¡'
                ]);
            } else {
                return response()->json([
                    'ok' => true,
                    'data' => $marks
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
                'name_mark' => 'required|min:3|max:120'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $mark = new Mark();
            $mark->name_mark = $request->name_mark;
            $mark->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Marca creada exitosamente",
                "data" => $mark
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

            $mark = Mark::findOrFail($id);

            if (isEmpty($mark)) {
                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Marca encontrada exitosamente",
                    "data" => $mark
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "La marca que buscas no existe"
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
                'name_mark' => 'required|min:3|max:120'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $mark = Mark::findOrFail($id);
            $mark->name_mark = $request->name_mark;
            $mark->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Marca editada exitosamente",
                "data" => $mark
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
            $mark = Mark::findOrFail($id);
            $mark->delete();

            return response()->json([
                "ok" => true,
                "message" => "Marca eliminada exitosamente"
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
