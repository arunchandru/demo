import { Component } from '@angular/core';

@Component({
  selector: 'app-digitinsurance',
  templateUrl: './digitinsurance.component.html',
  styleUrls: ['./digitinsurance.component.css']
})
export class DigitinsuranceComponent {


  input:any = [
    {
        "firstName": "Mark",
        "lastName": "Otto",
        "age": 30,
        "gender": "MALE",
        "communications": [
            {
                "communicationType": "EMAIL",
                "communicationId": "test@test.com"
            },
            {
                "communicationType": "MOBILE",
                "communicationId": "9876543210"
            },
            {
                "communicationType": "SKYPE",
                "communicationId": "test@sk"
            }
        ],
        "profession": "BUSINESSMAN",
    },
    {
        "firstName": "David",
        "lastName": "Warner",
        "age": 21,
        "gender": "MALE",
        "communications": [
            {
                "communicationType": "EMAIL",
                "communicationId": "student@test.com"
            },
            {
                "communicationType": "MOBILE",
                "communicationId": "7373737373"
            }
        ],
        "profession": "STUDENT",
    }
]


output:any = {
  email : this.input[0].communications[0].communicationId,
  mobile : this.input[0].communications[1].communicationId,
  profession : this.input[0].profession
}
}
