import { Component, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interview';
  autofocus = false;
  digit ="/digit"

  routing="chennaiinterview";

  constructor(private router:Router){}

  companySelect(){
    this.router.navigate(["/" + this.routing]);
  }
  

 
}
