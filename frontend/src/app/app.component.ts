import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'layout';

  logout(){
    localStorage.removeItem("AccessToken");
  }

  checkLogin(){
    if(localStorage.getItem("AccessToken")){
      return true;
    }
    else {
      return false;
    }
  }
}
