import { Component } from '@angular/core';
import {MyService} from '../service/my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu ;
  constructor(private service : MyService){
   this.menu= [
    {name:"planner", path:"planner"}, 
    {name:"trainees", path:'trainees'},
    {name:"add-earnings", path:'add-earnings'},
    {name:"add-expense", path:'add-expense'},
    ]
  }
}
