import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './pages/menu/menu.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { NuevaCategoriaComponent } from './dialogs/nueva-categoria/nueva-categoria.component';
import { VentasComponent } from './pages/ventas/ventas.component';
import { CategoriasFormComponent } from './dialogs/categorias-form/categorias-form.component';
import { NgxDatatableModule} from '@swimlane/ngx-datatable'




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    NuevoProductoComponent,
    NuevaCategoriaComponent,
    VentasComponent,
    CategoriasFormComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxDatatableModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
