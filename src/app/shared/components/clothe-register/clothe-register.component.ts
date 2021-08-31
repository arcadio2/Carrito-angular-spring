import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothe-register',
  templateUrl: './clothe-register.component.html',
  styleUrls: ['./clothe-register.component.css']
})
export class ClotheRegisterComponent implements OnInit {
  data = {
    title: "Nike windrunner A.I.R Kelly  Anna London",
    image: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/a905cb6a-620d-4fd6-94fc-cc67b87f05b9/windrunner-airchamarra-de-running-windrunner-air-hXLLl9.png",
    price: 2299,
    description: "Chamarra de running para hombre",
    sizes: ["XS","S","M","L","XL"],
  }

  constructor() { }

  ngOnInit(): void {
  }

}
