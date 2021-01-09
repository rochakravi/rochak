import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlannerComponent} from './components/planner/planner.component';
import {TraineesComponent} from './components/trainees/trainees.component'
import { AddTraineeComponent} from './components/add-trainee/add-trainee.component';
import { AddEarningsComponent} from './components/add-earnings/add-earnings.component'
import {AddExpenseComponent} from './components/add-expense/add-expense.component';


const routes: Routes = [
  {path:'', component:PlannerComponent},
  {path:'planner',component:PlannerComponent},
  {path:'add-earnings', component:AddEarningsComponent},
  {path:'add-expense', component:AddExpenseComponent},
  {path:'trainees',
  children:[
    {path:'', component:TraineesComponent},
    {path:'add', component:AddTraineeComponent}
  ]
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
