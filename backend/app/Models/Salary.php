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
        'dateWord',
        'dayOff',
        'bonus',
        'tax',
        'total',
    ];

    function employee(){
        return $this->hasOne(employee::class);
    }
}
