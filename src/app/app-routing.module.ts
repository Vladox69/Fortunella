import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioProductoComponent } from './admin/productos/formulario-producto/formulario-producto.component';
import { ListaProductosComponent } from './admin/productos/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: '', redirectTo: 'ad-productos', pathMatch: 'full' },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'nuevo-producto', component: FormularioProductoComponent },
  { path: 'editar-producto/:id', component: FormularioProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
