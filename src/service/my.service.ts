import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IClient} from '../interface/client'

@Injectable({
  providedIn: 'root'
})
export class MyService {
  client ;
  earnings ;
  expense

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};

  constructor(private http : HttpClient ) { }

  getClients(){
   
    return this.http.get('http://localhost:8080/clients', this.httpOptions);
  }

   addClient(){ //payload : IClient
 
   const body = this.client;
    return this.http.post('http://localhost:8080/addClient',body, this.httpOptions);
  }
   addEarnings(){ 
   const body = this.earnings; 
    return this.http.post('http://localhost:8080/createEarmings',body, this.httpOptions);
  }
   showEarnings(){ 
    return this.http.get('http://localhost:8080/showEarmings', this.httpOptions);
  }
  addExpense(){ 
   const body = this.expense;   
    return this.http.post('http://localhost:8080/createExpense',body, this.httpOptions);
  }
   showExpenses(){ 
    return this.http.get('http://localhost:8080/showExpense', this.httpOptions);
  }
}