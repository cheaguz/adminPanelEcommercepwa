import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Categorias, Productos} from 'src/app/interfaces/productos'
import { ProductosService } from 'src/app/services/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
producto:Productos={
  _id : "",
  name : "",
  description : "",
  sku :"",
  image : "",
  price : 0,
  quantity : 0,
  category : {name : ""}

};

myForm:FormGroup;
catSelected = [];

  constructor(private route : ActivatedRoute ,
    private prdService : ProductosService ,
    private fb :FormBuilder,
    private router : Router) {


    const id = this.route.snapshot.paramMap.get("id");

    this.myForm=this.fb.group({
      name : [""],
      description: ["",[Validators.required]],
      sku: ["",[Validators.required]],
      price: ["",[Validators.required]],
      category: ["",[Validators.required]],
      quantity: ["",[Validators.required]],
      image : ["",[Validators.required]]
    });
    //--------------------------------
    this.prdService.getById(id)
    .subscribe((data:Productos)=>{
      this.producto=data;
      console.log(data)
    },
    err=>{
      console.log(err)
    });
    //-------------------------------------
   

  }

  guardar(){
    let respuesta = confirm("Guardar producto ?")  
    if(respuesta){
      const id = this.route.snapshot.paramMap.get("id");
      this.myForm.value.category=this.catSelected[1];
      this.prdService.update(id,this.myForm.value)
      .subscribe(data=>{
        alert("Hecho!")
        this.router.navigateByUrl('/productos')
      },
      err=>{
        console.log(err)
        alert("Hubo un error")
      })
}
      

}

eliminar(){ 
let respuesta = confirm("Eliminar producto ?")  
  if(respuesta){
    const id = this.route.snapshot.paramMap.get("id");
    this.prdService.delete(id)
    .subscribe(
      data=>{
        alert("Eliminado")
        this.router.navigateByUrl('/productos')
      },
      err=>{
        alert("Hubo un error")
        console.log(err)
      }
    )
  }
}

  ngOnInit(): void {
  }

}
