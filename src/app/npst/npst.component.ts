import { Component } from '@angular/core';

@Component({
  selector: 'app-npst',
  templateUrl: './npst.component.html',
  styleUrls: ['./npst.component.css']
})
export class NPSTComponent {


  
newarray = [12,345,2,6,7896];
Input:any = [
  { 
    cardtitle:"EVEN",
    check :  []       
  },
  {
    cardtitle: "ODD" ,
    check :  []             
  }
]


ngOnInit(){


  var evencount = 0;
  var evenvalue = 0;
  var oddcount = 0;
  var oddvalue = 0;


    for(let i=0;i<this.newarray.length;i++){

       var CountCondition= this.newarray[i].toString().length;
       var ValueCondition= this.newarray[i];
      if(CountCondition % 2 == 0){
        evencount ++;
      } else {
        oddcount ++;

      }

      if(ValueCondition % 2 == 0){
        evenvalue ++;
      } else {
       oddvalue ++;
      } 
    }

    this.Input[0].check.push({  type: "Count" , data: evencount },{ type:"value" , data: evenvalue});
    this.Input[1].check.push({  type: "Count" , data: oddcount },{ type:"value" , data: oddvalue});
}
}
