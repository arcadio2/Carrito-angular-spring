import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit {
  @Input() tipoRopa:string=''; 
  constructor() { }

  ngOnInit(): void {
  }

}
