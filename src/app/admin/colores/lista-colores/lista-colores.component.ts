import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Color from 'src/app/models/color.interface';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-lista-colores',
  templateUrl: './lista-colores.component.html',
  styleUrls: ['./lista-colores.component.css']
})
export class ListaColoresComponent implements OnInit {

  colores!:Color[];
  displayedColumns: string[] = ['id', 'nombre','val_hex','acciones'];

  constructor(private colorService:ColorService,private router:Router) { }

  ngOnInit(): void {
    this.getDataColores();
  }

  getDataColores(){
    this.colorService.getColores().subscribe(response=>{
      this.colores=[];
      response.forEach((element:any) => {
        this.colores.push({id:element.payload.doc.id,...element.payload.doc.data()});
      });
      console.log(this.colores);
    });

  }

  onClickNuevo(){
    this.router.navigate(['/nuevo-color']);
  }

  onClickAtras(){
    this.router.navigate(['/home']);
  }

  onClickEditar(id:string){
    this.router.navigate(['/editar-color',id]);
  }

  onClickEliminar(id:string){
    this.colorService.deleteColor(id);
  }

}
