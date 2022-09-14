import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Color from 'src/app/models/color.interface';
import Producto from 'src/app/models/producto.interface';
import Tipo from 'src/app/models/tipo.interface';
import { ColorService } from 'src/app/services/color.service';
import { ProductoService } from 'src/app/services/producto.service';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css'],
})
export class FormularioProductoComponent implements OnInit {
  
  id!: string | null;
  colores!: Color[];
  tipos!: Tipo[];
  producto!: Producto;
  formProducto:FormGroup=new FormGroup({
    nombre:new FormControl(''),
    precio:new FormControl(''),
    urlImage:new FormControl(''),
    filePath:new FormControl(''),
    visible:new FormControl(''),
    tipo:new FormControl(''),
    colores_array:new FormArray([
    ])
  });

  imageChange: boolean = false;
  idImage!: string;
  file: any;
  filePath: string = '';
  ref: any;
  task: any;

  constructor(
    private colorService: ColorService,
    private tipoService: TipoService,
    private productoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private storage: AngularFireStorage
  ) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getDataTipos();
    this.getDataColores();
    if(this.id!=null){
      this.getDataProducto();
    }
  }

  getDataTipos(){
    this.tipoService.getTipos().subscribe(response=>{
      this.tipos=[];
      response.forEach((element:any) => {
        this.tipos.push({id:element.payload.doc.id,...element.payload.doc.data()});
      });
    });
  }

  getDataColores(){
    this.colorService.getColores().subscribe(response=>{
      this.colores=[];
      response.forEach((element:any) => {
        this.colores.push({id:element.payload.doc.id,...element.payload.doc.data()})
      });
    })
  }

  get colores_array() {
    return this.formProducto.get('colores_array') as FormArray;
  }
  
  addColor(color = '') {
    this.colores_array.push(new FormControl(color));
  }

  createControlColores(colores: string[]) {
    this.colores_array.clear();
    for (let index in colores) {
      this.addColor(colores[index]);
    }
  }

  removeColor(index: number) {
    this.colores_array.removeAt(index);
  }

  getDataProducto(){
    this.productoService.getProductoById(this.id!).subscribe(response => {
      this.producto = response.payload.data() as Producto;
      this.producto.id = this.id!;
      this.setValuesProducto(this.producto);
    });
  }

  imageUpload(evento: any) {
    if (this.filePath == '') {
      this.idImage = Math.random().toString(36).substring(2);
      this.filePath = `fortunella/file_${this.idImage}`;
    }
    this.file = evento.target.files[0];
    this.ref = this.storage.ref(this.filePath);
    this.imageChange = true;
  }

  setValuesProducto(producto: Producto) {
    this.filePath=producto.filePath;
    this.formProducto.get('nombre')?.setValue(producto.nombre);
    this.formProducto.get('precio')?.setValue(producto.precio);
    this.formProducto.get('urlImage')?.setValue(producto.urlImage);
    this.formProducto.get('visible')?.setValue(producto.visible);
    this.formProducto.get('filePath')?.setValue(producto.filePath);
    this.formProducto.get('tipo')?.setValue(producto.tipo);
    this.createControlColores(producto.colores_array);
  }

  get imagen():string{
    return this.formProducto.get('urlImage')?.value;
  }

  async onClickGuardar(){
    if (this.id == null) {
      await this.storage.upload(this.filePath, this.file);
      let rf = this.storage.ref(this.filePath);
      let url =  rf.getDownloadURL();
      url.subscribe(async (res) => {
      this.formProducto.get('filePath')?.setValue(this.filePath);
        this.formProducto.get('urlImage')?.setValue(res);
        await this.productoService.addProducto(this.formProducto.value);
      });
    } else {
      if (this.imageChange) {
        await this.storage.upload(this.filePath, this.file);
      }
      await this.productoService.updateProducto(
        this.id,
        this.formProducto.value
      );
    }
    this.volver();
  }

  volver(){
    this.router.navigate(['/productos']);
  }

}
