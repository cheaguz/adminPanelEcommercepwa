import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) {}

  getAll() {
    return this.http.get("http://localhost:3000/sales")
   };
   getPage(data){
    return this.http.get("http://localhost:3000/sales?page="+data)
  };

  update(id,data){
    return this.http.put("http://localhost:3000/sales/"+id,data)
  }
}
