import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import Usuario from '../models/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  public login(user:Usuario){
    return this.auth.signInWithEmailAndPassword(user.email,user.password);
  }

  public logout(){
    this.auth.signOut();
  }

}
