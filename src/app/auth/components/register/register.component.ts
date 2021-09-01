import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  miFormulario: FormGroup= this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
