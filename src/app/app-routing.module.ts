import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NuevoProductoComponent } from './pages/nuevo-producto/nuevo-producto.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { VentasComponent } from './pages/ventas/ventas.component';

const routes: Routes = [
  {path : "" , component:LoginPageComponent},
  {path : "productos", component:ProductosComponent},
  {path : "productos/:id", component : ProductoDetalleComponent},
  {path : "nuevo-producto",component : NuevoProductoComponent},
  {path : "ventas", component : VentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
