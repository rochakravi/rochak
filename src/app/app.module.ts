import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { TraineesComponent } from './components/trainees/trainees.component';
import { AddTraineeComponent } from './components/add-trainee/add-trainee.component';
import { PlannerComponent } from './components/planner/planner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEarningsComponent } from './components/add-earnings/add-earnings.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import { AgricultureComponent } from './components/agriculture/agriculture.component';
@NgModule({
  declarations: [
    AppComponent,
    TraineesComponent,
    AddTraineeComponent,
    PlannerComponent,
    AddEarningsComponent,
    AddExpenseComponent,
    AgricultureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
     
     BrowserAnimationsModule,
     
     NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
