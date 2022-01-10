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
        $this->assertCount(1, User::all());

        $user = User::first();

        $this->assertEquals($user->name, 'Steven Rocha');
        $this->assertEquals($user->email, 'rochastiven125@gmail.com');

    }
}
