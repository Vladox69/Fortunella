import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Color from 'src/app/models/color.interface';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-formulario-colores',
  templateUrl: './formulario-colores.component.html',
  styleUrls: ['./formulario-colores.component.css']
})
export class FormularioColoresComponent implements OnInit {

  id!:string|null;
  color!:Color;
  formColor:FormGroup=new FormGroup({
    nombre:new FormControl(''),
    val_hex:new FormControl('')
  });

  constructor(private colorService:ColorService,private router:Router,private activatedRoute:ActivatedRoute) { 
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.id);
    if(this.id!=null){
      this.getDataColor();
    }
  }

  getDataColor(){
    this.colorService.getColorById(this.id!).subscribe(response=>{
      this.color=response.payload.data() as Color;
      this.color.id!=this.id;
      this.setValues(this.color);
    })
  }

  setValues(color:Color){
    this.formColor.get('nombre')?.setValue(color.nombre);
    this.formColor.get('val_hex')?.setValue(color.val_hex);
  }

  async onClickGuardar(){
    if(this.id==null){
      await this.colorService.addColor(this.formColor.value);
    }else{
      await this.colorService.updateColor(this.id,this.formColor.value);
    }
    this.volver();
  }

  volver(){
    this.router.navigate(['/colores']);
  }

}
