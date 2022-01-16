<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

use function PHPUnit\Framework\isEmpty;

class CategoryController extends Controller
{

    public function index()
    {
        try {
            $categories = Category::all();

            if ($categories->isEmpty()) {
                return response()->json([
                    'ok' => false,
                    'message' => 'Aún no se ha creado ninguna categoria. !Crea una ya¡'
                ]);
            } else {
                return response()->json([
                    'ok' => true,
                    'data' => $categories
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
                'name_category' => 'required|min:3|max:120'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $category = new Category();
            $category->name_category = $request->name_category;
            $category->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Categoria creada exitosamente",
                "data" => $category
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

            $category = Category::findOrFail($id);

            if (isEmpty($category)) {
                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Categoria encontrada exitosamente",
                    "data" => $category
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "La categoria que buscas no existe"
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
                'name_category' => 'required|min:3|max:120'
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $category = Category::findOrFail($id);
            $category->name_category = $request->name_category;
            $category->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Categoria editada exitosamente",
                "data" => $category
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
            $category = Category::findOrFail($id);
            $category->delete();

            return response()->json([
                "ok" => true,
                "message" => "Categoria eliminada exitosamente"
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
