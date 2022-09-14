import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Tipo from 'src/app/models/tipo.interface';
import { TipoService } from 'src/app/services/tipo.service';

@Component({
  selector: 'app-formulario-tipos',
  templateUrl: './formulario-tipos.component.html',
  styleUrls: ['./formulario-tipos.component.css']
})
export class FormularioTiposComponent implements OnInit {

  id!:string|null;
  tipo!:Tipo;

  formTipo:FormGroup=new FormGroup({
    nombre:new FormControl(''),
    descripcion:new FormControl('')
  })

  constructor(private tipoService:TipoService,private activatedRoute:ActivatedRoute,private router:Router) {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    if(this.id!=null){
      this.getDataTipo();
    }
  }

  getDataTipo(){
    this.tipoService.getTipoById(this.id!).subscribe(response=>{
      this.tipo=response.payload.data() as Tipo;
      this.tipo.id!=this.id
      this.setValuesTipo(this.tipo);
    });
  }

  async onClickGuardar(){
    if(this.id==null){
      await this.tipoService.addTipo(this.formTipo.value);
    }else{
      await this.tipoService.updateTipo(this.id,this.formTipo.value);
    }
  }

  volver(){
    this.router.navigate(['/tipos']);
  }

  setValuesTipo(tipo:Tipo){
    this.formTipo.get('nombre')?.setValue(tipo.nombre);
    this.formTipo.get('descripcion')?.setValue(tipo.descripcion);
  }

}
