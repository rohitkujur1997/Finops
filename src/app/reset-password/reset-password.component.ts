import { Component, OnInit } from '@angular/core';
import { ResetPassword } from '../Models/reset-password.model.ts/reset-password.model.ts.module';  
import { FormGroup, FormBuilder, Validators} from '@angular/forms'; 
import { confirmPasswordValidator } from '../helpers/confirm-password-validator';
import { ActivatedRoute, Router } from '@angular/router';
import ValidateForm from '../helpers/validationForm';
import { ResetPasswordService } from '../service/reset-password-service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetPasswordForm!: FormGroup;
  emailToReset!: string;
  emailToken!: string;
  resetPasswordObj = new ResetPassword();

  constructor(private fb: FormBuilder, 
    private router: Router, private activatedRoute: ActivatedRoute, 
    private toast: NgToastService, private resetService: ResetPasswordService) { }

  ngOnInit(): void{
    this.resetPasswordForm = this.fb.group({
      password:[null, Validators.required],
      confirmPassword:[null, Validators.required]
    },{
      validator: confirmPasswordValidator("password", "confirmPassword")
    });

      this.activatedRoute.queryParams.subscribe(val=>{
        this.emailToReset = val['email'];
        let uriToken = val['code'];
        this.emailToken = uriToken.replace(/ /g,'+');
        
      })

  }

  reset(){
    if(this.resetPasswordForm.valid){
        this.resetPasswordObj.email = this.emailToReset;
        this.resetPasswordObj.newPassword = this.resetPasswordForm.value.password;
        this.resetPasswordObj.confirmPassword = this.resetPasswordForm.value.confirmPassword;
        this.resetPasswordObj.emailToken = this.emailToken;
        
        this.resetService.resetPassword(this.resetPasswordObj)
        .subscribe({
          next:(res)=>{
              this.toast.success({
                detail: 'SUCCESS',
                summary: "Password reset successfully!",
                duration: 5000
              });
              this.router.navigate(['/'])
          },
          error:(err)=>{
            this.toast.error({
              detail: 'ERROR',
              summary: "Something went wrong!",
              duration: 5000,
            });
          }
          
        })

    }else{
      ValidateForm.validateAllFormFields(this.resetPasswordForm);
    }
  }  

}
