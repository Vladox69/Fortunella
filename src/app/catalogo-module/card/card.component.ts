import { Component, Input, OnInit } from '@angular/core';
import Producto from 'src/app/models/producto.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() producto?:Producto

  constructor() { 
    console.log(this.producto);
  }

  ngOnInit(): void {
  }

}
