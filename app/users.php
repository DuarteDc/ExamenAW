<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class users extends Model
{
    protected $tabla='users';
    protected $fillable = [
        'name','apellido_p','apellido_m','telefono', 'email',
    ];
}
