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
import { CatalogoComponent } from './catalogo-module/catalogo/catalogo.component';
import { LandingPageComponent } from './landing-module/landing-page/landing-page.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';
import { ContactoComponent } from './contacto-module/contacto/contacto.component';
import { SobreFortunellaComponent } from './sobre-fortunella-module/sobre-fortunella/sobre-fortunella.component';
import { PersonalizarComponent } from './personalizar-module/personalizar/personalizar.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

const routes: Routes = [
  { path: '',component:LandingPageComponent},
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin}},
  { path: 'tipos', component: ListaTiposComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'nuevo-tipo', component: FormularioTiposComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'editar-tipo/:id', component: FormularioTiposComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'colores', component: ListaColoresComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'nuevo-color', component: FormularioColoresComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'editar-color/:id', component: FormularioColoresComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'productos', component: ListaProductosComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'nuevo-producto', component: FormularioProductoComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'editar-producto/:id', component: FormularioProductoComponent, canActivate: [AngularFireAuthGuard],data:{authGuardPipe:redirectUnauthorizedToLogin} },
  { path: 'catalogo', component: CatalogoComponent },
  {path:'contacto',component:ContactoComponent},
  {path:'sobre-fortunella',component:SobreFortunellaComponent},
  {path:'personalizar',component:PersonalizarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
