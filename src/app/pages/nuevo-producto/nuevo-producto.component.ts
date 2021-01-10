import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { columnsTotalWidth } from '@swimlane/ngx-datatable';





@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {
name : string;
image: string;
description:string;
sku:number;
price:number;
categoryName : string;
quantity:number;
//output, [0] nombre , [1] id
catSelected=[];
myForm:FormGroup;



  constructor(private fb : FormBuilder , private prdServ : ProductosService) {
    this.myForm=this.fb.group({
      name : [""],
      image : [""],
      description : [""],
      sku: [""],
      price: [""],
      quantity: [""],
      category : [""]
    });

  }


  guardar(){
    this.myForm.value.category=this.catSelected[1];

    this.prdServ.new(this.myForm.value)
    .subscribe(data=>{
      alert("Hecho!")
    },
    err=>{
      console.log(err)
    })
  }



  
  ngOnInit(): void {
  }


}


