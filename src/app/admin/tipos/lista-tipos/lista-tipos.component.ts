import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Tipo from 'src/app/models/tipo.interface';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-lista-tipos',
  templateUrl: './lista-tipos.component.html',
  styleUrls: ['./lista-tipos.component.css']
})
export class ListaTiposComponent implements OnInit {

  

  tipos!:Tipo[];
  displayedColumns: string[] = ['id', 'nombre','descripcion','acciones'];

  constructor(private tipoService:TipoService,private router:Router) { }

  ngOnInit(): void {
    this.getDataTipo();
  }

  getDataTipo(){
    this.tipoService.getTipos().subscribe(response=>{
      this.tipos=[];
      response.forEach((element:any) => {
          this.tipos.push({id:element.payload.doc.id,...element.payload.doc.data()})
      });
    })
  }

  onClickNuevo(){
    this.router.navigate(['/nuevo-tipo']);
  }

  onClickAtras(){
    this.router.navigate(['/home']);
  }

  onClickEditar(id:string){
    this.router.navigate(['/editar-tipo',id])
  }

  async onClickEliminar(id:string){
    await this.tipoService.deleteTipo(id);
  }

}
