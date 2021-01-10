import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/services/productos.service'
import {Productos,ProductoPaginator} from 'src/app/interfaces/productos'
import { $ } from 'protractor';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
productos:Productos[]=[];
hasNextPage: boolean;
hasPrevPage: boolean;
nextPage: number;
page: number;
prevPage: any;
pagina;


  constructor(private prdServ: ProductosService) {
    
    this.prdServ.getAll()
    .subscribe((data:ProductoPaginator)=>{
      this.productos = data.docs; 
      console.log(data)
      this.hasNextPage=data["hasNextPage"];
      this.hasPrevPage=data["hasPrevPage"];
      this.nextPage=data["nextPage"];
      this.prevPage=data["prevPage"];
    },
    err=>{
      console.log("Error",err)
    });
   }

   changePage(page){
     if(page==="next"){
       this.pagina = this.nextPage;
     }else{
       this.pagina = this.prevPage;
     }
     this.prdServ.getPage(this.pagina)
     .subscribe((data:ProductoPaginator)=>{
       this.productos = data.docs; 
       this.hasNextPage=data["hasNextPage"];
       this.hasPrevPage=data["hasPrevPage"];
       this.nextPage=data["nextPage"];
       this.prevPage=data["prevPage"];
    },
    err=>{
      console.log(err)
    });
   }

  ngOnInit(): void {
  }

}



