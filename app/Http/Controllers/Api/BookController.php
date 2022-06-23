<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function create(Request $request)
    {

    }

    public function read($id)
    {

    }

    public function update(Request $request, $id)
    {

    }

    public function delete($id)
    {

    }

    public function list()
    {
        $response = [];

        $response['books'] = Book::all();
        return response()->json($response, 201);
    }
}
