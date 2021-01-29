<?php

namespace App\Http\Controllers;

use App\Models\Position;
use App\Modules\employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
 

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $position = Position::all();
        return response()->json($position);


        
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
        $position = new Position();
        $position->fill($request->all());
        $position->save();
        return response()->json($position);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {     
           $positions = DB::table('positions')
        ->select('employees.*','positions.*')
        ->join('employees','positions.id','=','employees.position')
        ->where('positions.id','=',$id)
        ->get();
        return response()->json($positions, 200);
    }
    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $position = Position::find($id);
        return response()->json($position);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $position = Position::find($id);
        $position->fill($request->all());
        $position->save();
        return response()->json($position);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Position  $position
     * @return \Illuminate\Http\Response
     */
    // public function destroy($id)
    // {
    //     $employee = employess::find($id);
    //     $employee->salary()->delete();
    //     $position = Position::find($id);
    //     $position->employee()->delete();
    //     $position->delete();
    // }


    public function search(Request $request)
    {
        $position = position::where('name','LIKE','%'.$request->keyword.'%')->get();
        return response()->json($position);
    }


}
