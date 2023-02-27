import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControlName, FormControl} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})

export class LoginComponent {
  title="Login";
  login:FormGroup;

  constructor(private re:FormBuilder){
     this.login=this.re.group({
      username:['',[Validators.required,]],
     
      pass:['',[Validators.required,Validators.minLength(8)]]
     })
   
    
  }
  onSubmit(){
    console.log(this.login);
  }
  
}
