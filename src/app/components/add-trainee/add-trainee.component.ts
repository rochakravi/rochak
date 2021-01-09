import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
    import {MyService} from '../../../service/my.service';
    import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-trainee',
  templateUrl: './add-trainee.component.html',
  styleUrls: ['./add-trainee.component.scss'],
  providers: [DatePipe]
})
export class AddTraineeComponent implements OnInit {
  add = new FormGroup({
  name: new FormControl(''),
  course: new FormControl(''),
  estimated: new FormControl(''),
  received: new FormControl(''),
  status: new FormControl(''),
  reg_date:new FormControl(new Date()),
  
});

  constructor(fb: FormBuilder, private service : MyService, private datePipe: DatePipe) {

   }

  ngOnInit(): void {
  }
   onSubmit() {
   
    this.add.value.reg_date = this.datePipe.transform(this.add.value.reg_date, 'yyyy-MM-dd');
   
     this.service.client = this.add.value ;
       
       
          this.service.addClient().subscribe(data =>{
            console.log(data)
          }, err=>{
            console.log(err)
          });
        }
        

    

}
