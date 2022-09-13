import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import Color from '../models/color.interface';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(private firestore:AngularFirestore) { }

  public getColores(){
    return this.firestore.collection('color').snapshotChanges();
  }

  public getColorById(id:string){
    return this.firestore.collection('color').doc(id).snapshotChanges();
  }

  public deleteColor(id:string){
    return this.firestore.collection('color').doc(id).delete();
  }

  public addColor(color:Color){
    return this.firestore.collection('color').add(color);
  }

  public updateColor(id:string,color:Color){
    return this.firestore.collection('color').doc(id).update(color);
  }

}
