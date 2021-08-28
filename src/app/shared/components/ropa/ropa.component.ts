import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
  @Input() tipoRopa:string=''; 
  subdivisiones = [
    {
      persona:"Niño",
      cosas: ["Playeras", "Pants", "Zapatos"]
    },
    {
      persona:"Niña",
      cosas: ["blusas", "pescadores", "jeans"]
    },
    {
      persona:"Mujer",
      cosas: ["Blusas", "Panties", "Tops", "Blusas chidas", "Vestidos", "Jeans"]
    },
    {
      persona:"Hombre",
      cosas: ["Camisas", "Trajes", "Pantalones de vestir", "Pantalón de mezclilla"]
    }
  ]; 
  items:string[] =[]; 
  constructor() { }
  ngOnInit(): void {
    this.subdivisiones.forEach(valor=>{
      if(this.tipoRopa == valor.persona){
        this.items=valor.cosas; 
      }
    }); 
    
  }

}
