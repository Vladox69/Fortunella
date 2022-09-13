import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from '../environments/environment';
import { ListaProductosComponent } from './admin/productos/lista-productos/lista-productos.component';
import { FormularioProductoComponent } from './admin/productos/formulario-producto/formulario-producto.component';
import { FormularioColoresComponent } from './admin/colores/formulario-colores/formulario-colores.component';
import { ListaColoresComponent } from './admin/colores/lista-colores/lista-colores.component';
import { ListaTiposComponent } from './admin/tipos/lista-tipos/lista-tipos.component';
import { FormularioTiposComponent } from './admin/tipos/formulario-tipos/formulario-tipos.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    FormularioTiposComponent
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
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
