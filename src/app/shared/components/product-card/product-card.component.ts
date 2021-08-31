import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() data = {title: "", image: "", price: 0, description: "", sizes:[""]};

  constructor() { }

  ngOnInit(): void {
  }

}
