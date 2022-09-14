import { Component, OnInit } from '@angular/core';
import Producto from 'src/app/models/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  productos!:Producto[];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.getDataProductos();
  }

  getDataProductos(){
    this.productoService.getProductos().subscribe(response=>{
      this.productos=[];
      response.forEach((element:any) => {
        this.productos.push({id:element.payload.doc.id,...element.payload.doc.data()})
      });
    })
  }

}
