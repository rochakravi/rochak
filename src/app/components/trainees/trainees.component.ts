import { Component, OnInit } from '@angular/core';
import {MyService} from '../../../service/my.service';
@Component({
  selector: 'app-trainees',
  templateUrl: './trainees.component.html',
  styleUrls: ['./trainees.component.scss']
})
export class TraineesComponent implements OnInit {
  trainees;
  total;
  constructor(private service : MyService) { 
    // this.service.getClients().subscribe( data=>{
    //   this.trainees = data ;
    //   this.total = this.trainees.length;
    // })
    this.trainees = [
      {name:'athar', 
      session:[
        {
          date:'25/12/2020', contents:'Basics', feedback:'very good'
      },
     {
          date:'01/07/2021', contents:'*ngFor', feedback:'fantastic'
      }]
    },
      {name:'hans', session:[
        {
          date:'25/15/2020', contents:'My Sql', feedback:'good'
      },
     {
          date:'01/06/2021', contents:'java methods', feedback:'good'
      }]},
      {name:'ravi', session:[
        
     {
          date:'01/07/2021', contents:'React Native component', feedback:'good'
      }]},
    ]
  }

  ngOnInit(): void {
  }

}
