import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Tipo from '../models/tipo.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private firestore:AngularFirestore) { }

  public getTipos(){
    return this.firestore.collection('tipo').snapshotChanges();
  }

  public getTipoById(id:string){
    return this.firestore.collection('tipo').doc(id).snapshotChanges();
  }

  public deleteTipo(id:string){
    return this.firestore.collection('tipo').doc(id).delete();
  }

  public addTipo(tipo:Tipo){
    return this.firestore.collection('tipo').add(tipo);
  }

  public updateTipo(id:string,tipo:Tipo){
    return this.firestore.collection('tipo').doc(id).update(tipo);
  }

}
