import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthComponent } from './admin/auth/auth.component';
import { ListaProductosComponent } from './admin/productos/lista-productos/lista-productos.component';
import { FormularioProductoComponent } from './admin/productos/formulario-producto/formulario-producto.component';
import { FormularioColoresComponent } from './admin/colores/formulario-colores/formulario-colores.component';
import { ListaColoresComponent } from './admin/colores/lista-colores/lista-colores.component';
import { ListaTiposComponent } from './admin/tipos/lista-tipos/lista-tipos.component';
import { FormularioTiposComponent } from './admin/tipos/formulario-tipos/formulario-tipos.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HomeComponent } from './admin/home/home.component';
import { LandingPageComponent } from './landing-module/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaProductosComponent,
    FormularioProductoComponent,
    FormularioColoresComponent,
    ListaColoresComponent,
    ListaTiposComponent,
    FormularioTiposComponent,
    AuthComponent,
    HomeComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
