<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthRegisterTest extends TestCase
{
    /** @test */ 
    public function a_auth_register()
    {
        $this->withoutExceptionHandling();

        $formData = [
            'name' => 'Steven',
            'email' => 'steven@gmail.com',
            'password' => '111111'
        ];

        $response = $this->post('/api/register', $formData);
        $response->assertOk();

        $user = User::first();

        $this->assertEquals($user->name, 'Rocha Moran');
        $this->assertEquals($user->email, 'rochamoran1@gmail.com');

    }
}
