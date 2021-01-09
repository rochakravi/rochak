import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MyService} from '../../../service/my.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
  providers: [DatePipe]
})
export class AddExpenseComponent implements OnInit {
addExpense = new FormGroup({
  year: new FormControl(''),
  month: new FormControl(''),
  amount: new FormControl(''),
  concern: new FormControl(''),
   dueDate:new FormControl(new Date()),  
  status:new FormControl('')  
});
  constructor(fb: FormBuilder, private service : MyService, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.addExpense.value)
    this.addExpense.value.dueDate = this.datePipe.transform(this.addExpense.value.dueDate, 'yyyy-MM-dd');
    this.service.expense = this.addExpense.value ;
     this.service.addExpense().subscribe(data =>{
            console.log(data)
          }, err=>{
            console.log(err)
          });
  }
}
