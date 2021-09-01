import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;
  miFormulario: FormGroup= this.fb.group({
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  })
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {  
   


    this.authService.xd(); 
  }

}
