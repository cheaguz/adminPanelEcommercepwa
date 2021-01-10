import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService } from 'src/app/services/productos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-nueva-categoria',
  templateUrl: './nueva-categoria.component.html',
  styleUrls: ['./nueva-categoria.component.css']
})
export class NuevaCategoriaComponent implements OnInit {
  myForm:FormGroup;
  constructor(public activeModal: NgbActiveModal,private prdServ : ProductosService, private fb : FormBuilder) {
    this.myForm=this.fb.group({
      name : ["",[Validators.required]],
      image:["",[Validators.required]]
    });
   }

  guardar(){
    this.prdServ.newCategory(this.myForm.value)
    .subscribe(data=>{
      console.log(data)
    },
    err=>{
      console.log(err)
    });
   
  }



  ngOnInit(): void {
  }

}
