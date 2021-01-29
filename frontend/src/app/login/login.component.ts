import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  result!: Observable<any>;
  email!:string;
  password!:string;

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  // showToasterSuccess(){
  //   this.notificationService.showSuccess("Login successfully !!", "welcome to page")
  // }

  // showToasterError(){
  //   this.notificationService.showError("Something is wrong", "ItSolutionStuff.com")
  // }
  login(){
    this.loginService.login(this.email, this.password).subscribe(
      data => {
        this.result = data;
        localStorage.setItem("AccessToken", data.token);
        this.router.navigate(['']);
        // this.showToasterSuccess()
      });
  }


}
