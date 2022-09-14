import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './admin/auth/auth.component';
import { FormularioColoresComponent } from './admin/colores/formulario-colores/formulario-colores.component';
import { ListaColoresComponent } from './admin/colores/lista-colores/lista-colores.component';
import { HomeComponent } from './admin/home/home.component';
import { FormularioProductoComponent } from './admin/productos/formulario-producto/formulario-producto.component';
import { ListaProductosComponent } from './admin/productos/lista-productos/lista-productos.component';
import { FormularioTiposComponent } from './admin/tipos/formulario-tipos/formulario-tipos.component';
import { ListaTiposComponent } from './admin/tipos/lista-tipos/lista-tipos.component';
import { LandingPageComponent } from './landing-module/landing-page/landing-page.component';

const routes: Routes = [
  { path: '',component:LandingPageComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tipos', component: ListaTiposComponent },
  { path: 'nuevo-tipo', component: FormularioTiposComponent },
  { path: 'editar-tipo/:id', component: FormularioTiposComponent },
  { path: 'colores', component: ListaColoresComponent },
  { path: 'nuevo-color', component: FormularioColoresComponent },
  { path: 'editar-color/:id', component: FormularioColoresComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'nuevo-producto', component: FormularioProductoComponent },
  { path: 'editar-producto/:id', component: FormularioProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
