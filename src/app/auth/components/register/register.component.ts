import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  hide = true;
  hide2 = true; 
  miFormulario: FormGroup= this.fb.group({
    name:['',[Validators.required]],
    appat:['', [Validators.required]],
    email:['',[Validators.required]],
    password:['',[Validators.required]],
    rpassword:['',[Validators.required]]
  })
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

}
