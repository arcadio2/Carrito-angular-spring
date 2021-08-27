import { AfterContentInit, Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, DoCheck {
  tipoRopa:string[]=[
    "Mujer", "Hombre", "Niño", "Niña"
  ];
  menuActive: boolean = true;
  constructor() { }
  ngDoCheck(): void {
    if(window.location.pathname.includes("auth")) { 
      this.handleDeactivateMenu();
    }else{
      this.handleActivateMenu();
    }
  }

  ngOnInit(): void {
    if(window.location.pathname.includes("auth")) { 
      this.handleDeactivateMenu();
    }
  
  }
  handleActivateMenu(){
    this.menuActive = true; 
  }

  handleDeactivateMenu(){
    this.menuActive = false;
  }

}
