import { Component, OnInit , Output,EventEmitter} from '@angular/core';
import { NuevaCategoriaComponent} from 'src/app/dialogs/nueva-categoria/nueva-categoria.component'
import { ProductosService } from 'src/app/services/productos.service';
import { Categorias } from 'src/app/interfaces/productos';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-categorias-form',
  templateUrl: './categorias-form.component.html',
  styleUrls: ['./categorias-form.component.css']
})
export class CategoriasFormComponent implements OnInit {
  @Output()
  change = new EventEmitter();

  categories : Categorias;
  categoryName;
  categoryId;
  
  constructor(private prdServ : ProductosService, private modalService: NgbModal) { 

    this.prdServ.getCategories()
    .subscribe((data:Categorias)=>{
      this.categories = data;
    },
    err=>{
      console.log(err)
    });
  };
//-----------
  openModal(){
    const modalRef = this.modalService.open(NuevaCategoriaComponent);
  };

  getCat(catName,catId){
    this.categoryName=catName;
    this.categoryId=catId;
    console.log("name",catName,"id",catId)
    this.change.emit([this.categoryName,this.categoryId]);
  };

  enviarCategoria(){

  }


  ngOnInit(): void {
  }

}
