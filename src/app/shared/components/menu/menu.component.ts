import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  tipoRopa:string[]=[
    "Mujer", "Hombre", "Niño", "Niña"
  ];
  menuActive: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  handleActivateMenu(){
    this.menuActive = true; 
  }

  handleDeactivateMenu(){
    this.menuActive = false;
  }

}
