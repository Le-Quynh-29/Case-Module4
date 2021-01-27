import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionService} from '../position.service';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {

  positions!: any
  number: number = 1
  constructor(
    private positionSeverice: PositionService,
    private router : Router
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

}
