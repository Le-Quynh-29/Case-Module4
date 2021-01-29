import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-position-edit',
  templateUrl: './position-edit.component.html',
  styleUrls: ['./position-edit.component.scss']
})
export class PositionEditComponent implements OnInit {
  position!: any
  id!: any;
  // positionSeverice!: any;
  

  constructor(
    private service: PositionService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.position = new Position();
    this.id = this.route.snapshot.params['id'];
    this.service.getPosition(this.id).subscribe(
      data=> {
        this.position = data;
        console.log(this.position);
      }, error =>{
         console.log(error);
      }
    )
  }


  updatePosition() {
    this.service.updatePosition(this.id,this.position)
      .subscribe(data  => {
        console.log(data);
        this.position = new Position();
        this.router.navigate(['positions'])
      }, error => {console.log(error);
      }
      )
  }

  cancle() {
    this.router.navigate(['positions'])
  }




}
