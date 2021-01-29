import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from '../position';
import { PositionService} from '../position.service';


@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {

  positions!: any
  id!: number;
  position: Position = new Position();
  submitted = false;                                                             
  number: number = 1
  service: any;
  constructor(
    private positionSeverice: PositionService,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.loadData()
    
    
  }
  loadData(){
    this.positionSeverice.getPositionList().subscribe(
      data=>{
        this.positions = data
      },error=>{
        console.log(error)
      }
    )
  } 



  createPosition(){
    console.log('po:');
    console.log(this.position);
    this.positionSeverice.createPosition(this.position).subscribe(
      data => {
        console.log(data);
        this.position = new Position();
        this.loadData();
        this.router.navigate(['positions']);
      },
      error => {
        console.log(error)
      }
    )
  }

  deletePosition(id:number){
    this.positionSeverice.deletePosition(id)
    .subscribe(
      data => {
        console.log(data);
        this.loadData();
      },
      error => console.log(error));
  }


  

}
