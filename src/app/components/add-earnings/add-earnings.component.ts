import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import {MyService} from '../../../service/my.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-earnings',
  templateUrl: './add-earnings.component.html',
  styleUrls: ['./add-earnings.component.scss'],
  providers: [DatePipe]
})
export class AddEarningsComponent implements OnInit {

  addEarning = new FormGroup({
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
    console.log(this.addEarning.value)
    this.addEarning.value.dueDate = this.datePipe.transform(this.addEarning.value.dueDate, 'yyyy-MM-dd');
    this.service.earnings = this.addEarning.value ;
     this.service.addEarnings().subscribe(data =>{
            console.log(data)
          }, err=>{
            console.log(err)
          });
  }

}
