<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Mark;
use App\Models\Product;
use App\Models\Provider;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = DB::select('SELECT products.id as id_product, name_product, price_product, margin_gain, stock_product, 
            categories.id as id_category, categories.name_category, 
            marks.id as id_mark, marks.name_mark, 
            providers.id as id_provider, providers.name_provider, providers.phone_provider
            FROM products 
            inner join categories on categories.id = products.id_category
            inner join marks on products.id_mark = marks.id
            inner join providers on products.id_provider = providers.id');

            if ($products) {
                return response()->json([
                    'ok' => true,
                    'data' => $products
                ]);
            } else {
                return response()->json([
                    'ok' => false,
                    'message' => 'Aún no se ha creado ningún producto. !Crea una ya¡'
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
                'name_product' => 'required|min:3|max:120',
                'price_product' => 'required|min:0',
                'margin_gain' => 'required|min:0',
                'stock_product' => 'required|min:0',
                'id_category' => 'required|min:0',
                'id_mark' => 'required|min:0',
                'id_provider' => 'required|min:0',
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $product = new Product();
            $product->name_product = $request->name_product;
            $product->price_product = $request->price_product;
            $product->margin_gain = $request->margin_gain;
            $product->stock_product = $request->stock_product;
            $product->id_category = $request->id_category;
            $product->id_mark = $request->id_mark;
            $product->id_provider = $request->id_provider;
            $product->save();

            //retornar response in format json.
            return response()->json([
                "ok" => true,
                "message" => "Producto creado exitosamente",
                "data" => $product
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

            $product = Product::where("id", "=", $id)->first();
            $category = Category::where("id", "=", $product->id_category)->first();
            $mark = Mark::where("id", "=", $product->id_mark)->first();
            $provider = Provider::where("id", "=", $product->id_provider)->first();

            if ($product) {
                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Producto encontrado exitosamente",
                    "data" => [
                        'id' => $product->id,
                        'name_product' => $product->name_product,
                        'price_product' => $product->price_product,
                        'margin_gain' => $product->margin_gain,
                        'stock_product' => $product->stock_product,
                        'category' => $category,
                        'mark' => $mark,
                        'provider' => $provider,
                    ]
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El producto que buscas no existe"
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
                'name_product' => 'required|min:3|max:120',
                'price_product' => 'required|min:0',
                'margin_gain' => 'required|min:0',
                'stock_product' => 'required|min:0',
                'id_category' => 'required|min:0',
                'id_mark' => 'required|min:0',
                'id_provider' => 'required|min:0',
            ]);

            //verificated if exists errors
            if ($validator->fails()) {
                return response()->json([
                    "ok" => false,
                    "message" => $validator->errors()->first()
                ], 200);
            }

            $product = Product::where("id", "=", $id)->first();

            if ($product) {
                $product->name_product = $request->name_product;
                $product->price_product = $request->price_product;
                $product->margin_gain = $request->margin_gain;
                $product->stock_product = $request->stock_product;
                $product->id_category = $request->id_category;
                $product->id_mark = $request->id_mark;
                $product->id_provider = $request->id_provider;
                $product->save();

                //retornar response in format json.
                return response()->json([
                    "ok" => true,
                    "message" => "Producto editado exitosamente",
                    "data" => $product
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El producto que intentas editar no existe"
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
            $product = Product::where("id", "=", $id)->first();

            if ($product) {
                $product->delete();

                return response()->json([
                    "ok" => true,
                    "message" => "Producto eliminado exitosamente"
                ], 200);
            } else {
                return response()->json([
                    "ok" => false,
                    "message" => "El producto que intentas eliminar no existe"
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
