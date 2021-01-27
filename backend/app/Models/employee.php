<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'gender',
        'birth',
        'position',
        'address',
        'email',
        'phone',
        'date',
        'level',
        'img',
    ];

    function position(){
        return $this->beLongTo(Position::class);
    }

    function salary(){
        return $this->hasMany(Salary::class);
    }
}
