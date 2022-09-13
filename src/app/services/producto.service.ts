import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Producto from '../models/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private firestore:AngularFirestore) { }

  public getProductos(){
    return this.firestore.collection('producto').snapshotChanges();
  }

  public getProductoById(id:string){
    return this.firestore.collection('producto').doc(id).snapshotChanges();
  }

  public deleteProducto(id:string){
    return this.firestore.collection('producto').doc(id).delete();
  }

  public addProducto(producto:Producto){
    return this.firestore.collection('producto').add(producto);
  }

  public updateProducto(id:string,producto:Producto){
    return this.firestore.collection('producto').doc(id).update(producto);
  }

}
