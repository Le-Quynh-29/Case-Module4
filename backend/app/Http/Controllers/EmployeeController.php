<?php

namespace App\Http\Controllers;

use App\Models\employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $employees = DB::table('employees')
        ->join('positions','positions.id','=','employees.position')
        ->select('positions.position as positionName','employees.*')
        ->get();
        return response()->json($employees);
    
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $employee = new employee;
        $employee->fill($request->all());
        $employee->save();
        return response()->json($employee);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $employee = employee::find($id);
        $employee = DB::table('employees')
        ->join('salaries','employees.id','=','salaries.employee')
        ->select('salaries.*','employees.*')
        ->where('employees.id','=',$id)
        ->first();
        return response()->json($employee);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function edit( $id)
    {
        $employee = employee::find($id);
        return response()->json($employee);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $employee = employee::find($id);
        $employee->fill($request->all());
        $employee->save();
        return response()->json($employee);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\employee  $employee
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        
        $employee = employee::find($id);
        DB::table('salaries')->where('employee',"=",$id)->delete();
        $employee->delete();
    }

    public function search(Request $request)
    {
        $employee = employee::where('name','LIKE','%'.$request->keyword.'%')->get();
        return response()->json($employee);
    }
}
