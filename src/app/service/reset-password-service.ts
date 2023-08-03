import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResetPassword } from '../Models/reset-password.model.ts/reset-password.model.ts.module';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  private baseUrl : string = "https://localhost:7170/api/Email"

  constructor(private http: HttpClient) { }
  sendResetPasswordLink(email: string){
    return this.http.post<any>(`${this.baseUrl}/SendResetPasswordEmail/${email}`,{})
  }

  resetPassword(resetPasswordObj : ResetPassword){

    return this.http.post<any>(`${this.baseUrl}/reset-password`, resetPasswordObj);
  }

}
