import { Component,Input, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  constructor(private router:Router){}

  @Input() routing:any;

  ngOnChanges(changes:SimpleChange){
    this.router.navigate([this.routing]);

  }
}
