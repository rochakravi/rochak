import { Component, OnInit } from '@angular/core';
import {MyService } from '../../../service/my.service'

@Component({
  selector: 'app-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnInit {
  earnings ;
  expenses ;

  constructor(private service : MyService) { }

  ngOnInit(): void {
    this.service.showEarnings().subscribe(data=>{
      this.earnings = data ;
    }, err=>{
      console.log(err)
    });
    this.service.showExpenses().subscribe(data=>{
      this.expenses = data ;
    }, err=>{
      console.log(err)
    })

  }

}
