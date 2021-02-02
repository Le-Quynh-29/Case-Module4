import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Position } from '../position';
import { PositionService } from '../position.service';

@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.component.html',
  styleUrls: ['./position-detail.component.scss']
})
export class PositionDetailComponent implements OnInit {
  id!: number;
  positions!: any;

  // position: Position = new Position();
  submitted = false;
  number: number = 1
  service: any;
  constructor(
    private positionSeverice: PositionService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.positions = new Position();
    this.id = this.route.snapshot.params['id'];
    this.positionSeverice.getPositionDetail(this.id)
      .subscribe((data: any) => {
        console.log(data)
        this.positions = data;
        console.log(data);
      }, error => console.log(error));
      
  }
  

  cancle() {
    this.router.navigate(['positions']);
  }

}
