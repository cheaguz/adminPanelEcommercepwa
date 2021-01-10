import { Component, OnInit } from '@angular/core';
import {SalesService} from 'src/app/services/sales.service'
import {Sales, SalesPaginator} from 'src/app/interfaces/sales'

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
ventas : Sales ;
hasNextPage: boolean;
hasPrevPage: boolean;
nextPage: number;
page: number;
prevPage: any;
pagina;
  constructor(private salesService : SalesService) {
    this.salesService.getAll()
    .subscribe((data: SalesPaginator[])=>{
      this.ventas=data["docs"];
      this.hasNextPage=data["hasNextPage"];
      this.hasPrevPage=data["hasPrevPage"];
      this.nextPage=data["nextPage"];
      this.prevPage=data["prevPage"];
      console.log("data",data)
    },
    err=>{
      console.log(err)
    });
  

   }
  
   changePage(page){
    if(page==="next"){
      this.pagina = this.nextPage;
    }else{
      this.pagina = this.prevPage;
    }
    this.salesService.getPage(this.pagina)
    .subscribe((data:SalesPaginator[])=>{
      this.ventas = data["docs"]; 
      this.hasNextPage=data["hasNextPage"];
      this.hasPrevPage=data["hasPrevPage"];
      this.nextPage=data["nextPage"];
      this.prevPage=data["prevPage"];
   },
   err=>{
     console.log(err)
   });
   
  }


  aprobar(id){
    this.salesService.update(id,{
    status : "aprobado"
    })
    .subscribe(data=>{
      console.log(data)
    },
    err=>{
      console.log(err)
    })
  };

  rechazar(id){
    this.salesService.update(id,{
    status : "rechazado"
    })
    .subscribe(data=>{
      console.log(data)
    },
    err=>{
      console.log(err)
    })
  };
  ngOnInit(): void {
  }

}
