<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salary extends Model
{
    use HasFactory;
    protected $fillable = [
        'month',
        'employee',
        'dateWork',
        'dayOff',
        'bonus',
        'tax'
    ];

    function employee(){
        return $this->hasMany(employee::class);
    }
}
