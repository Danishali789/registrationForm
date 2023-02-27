import { Component } from '@angular/core';
import {FormGroup,FormBuilder,Validators,FormControlName, FormControl} from '@angular/forms'

@Component({
  selector: 'app-registratioin',
  templateUrl: './registratioin.component.html',
  styleUrls: ['./registratioin.component.css']
})
export class RegistratioinComponent {
  title="registration";
  registration:FormGroup;

  constructor(private re:FormBuilder){
     this.registration=this.re.group({
      firstname:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lastname:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      pass:['',[Validators.required,Validators.minLength(8)]],
      repass:['',[Validators.required,Validators.minLength(8),this.mustMatch]]
     })
   
    //  this.mustMatch('pass','repass');
  }
  
 
  // custom validation for cofirm password
    mustMatch(pass:any,repass:any){
      return(formGroup:FormGroup)=>{
        const passwordControl=formGroup.controls[pass];
        const cnfpasswordControl=formGroup.controls[repass];
        if(cnfpasswordControl.errors && !cnfpasswordControl.errors['mustMatch']){
           return;
        }
        if(passwordControl.value !== cnfpasswordControl.value){
          cnfpasswordControl.setErrors({mustMatch:true});
        }else{
          cnfpasswordControl.setErrors(null);
        }
      } 
    }

    // mustMatch(pass:any,repass:any){
    //   if(repass.errors && !repass.errors['mustMatch']){
    //             return;
    //         }
    //         if(pass.value !== repass.value){
    //                 return {mustMatch:true};
    //                }else{
    //                  return null;
    //                }
    // }


    get lastName(){
      return this.registration.get('lastname');
      }

    onSubmit(){
      console.log(this.registration);
    }

}
