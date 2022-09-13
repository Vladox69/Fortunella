import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import Producto from 'src/app/models/producto.interface';
import Tipo from 'src/app/models/tipo.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css'],
})
export class ListaProductosComponent implements OnInit {
  productos!: Producto[];
  tipos!: Tipo[];
  tiposName!: Tipo[];
  imagesUrl!: string[];
  displayedColumns: string[] = [
    'id',
    'nombre',
    'precio',
    'visible',
    'imagen',
    'tipo',
    'acciones',
  ];

  constructor(
    private productoService: ProductoService,
    private tipoService: TipoService,
    private router: Router,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.getDataTipos();
    this.getDataProductos();
  }

  getDataProductos() {
    this.productoService.getProductos().subscribe((response) => {
      this.productos = [];
      response.forEach((element: any) => {
        this.productos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
      this.setValuesFront(this.productos);
    });
  }

  getDataTipos() {
    this.tipoService.getTipos().subscribe((response) => {
      this.tipos = [];
      response.forEach((element: any) => {
        this.tipos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
    });
  }


  setValuesFront(productos: Producto[]) {
    this.tiposName = [];
    this.imagesUrl = [];
    for (let index in productos) {
      let search = this.tipos.find((tipo) => tipo.id == productos[index].tipo);
      this.tiposName.push(search!);
    }
    for (let index in productos) {
      let rf = this.storage.ref(productos[index].urlImage);
      let url = rf.getDownloadURL();
      let imagenUrl;
      url.subscribe((res) => {
        imagenUrl = res;
        this.imagesUrl.push(imagenUrl);
      });
    }
  }

  onClickNuevo() {
    this.router.navigate(['/nuevo-producto']);
  }

  onClickEditar(id: string) {
    this.router.navigate(['/editar-producto', id]);
  }

  async onClickEliminar(id: string) {
    await this.productoService.deleteProducto(id);
  }
}
