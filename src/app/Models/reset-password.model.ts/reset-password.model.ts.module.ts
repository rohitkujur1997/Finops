import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResetPassword { 
  public email! : string;
  public emailToken! : string;
  public newPassword! : string;
  public confirmPassword! : string;
}
