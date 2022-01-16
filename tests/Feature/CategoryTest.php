<?php

namespace Tests\Feature;

use App\Models\Category;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CategoryTest extends TestCase
{
    // use RefreshDatabase;

    /** @test */
    public function list_of_category() {
        $this->withoutExceptionHandling();
        $token = '1|e9ZyTQztFp7HSCgogJDeauIsetcPGVXkWu1myYCE';

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
        ->json('get', '/api/category/all', [
            'name_category' => 'user@gmail.com'
        ]);

        $response->assertOk();
    }

    /** @test */
    public function a_category_can_be_created() {

        $this->withoutExceptionHandling();
        $token = '1|e9ZyTQztFp7HSCgogJDeauIsetcPGVXkWu1myYCE';

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
        ->json('post', '/api/category/create', [
            'name_category' => 'user@gmail.com'
        ]);

        $response->assertOk();
    } 
}
