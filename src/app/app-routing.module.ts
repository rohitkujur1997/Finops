import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentReportComponent } from './assesment-report/assesment-report.component';
import { SubscriptionComponent } from './component/subscription/subscription.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PermissionGuard } from './permission.guard';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'signup',component:SignupComponent},
  {path:'',component:LoginComponent},
  {path:'home', component:HomeComponent
  , canActivate:[PermissionGuard],
  data:{
    Role:'Admin'
  }},

  {path:'subscription',component:SubscriptionComponent},
  {
    path: 'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path: 'assessment-report',
    component: AssesmentReportComponent
  },
  {
   path: 'resource-list',
   component: ResourceListComponent
  },
  {
    path: 'forgotpassword',
    component:ForgotpasswordComponent
  },
  {
    path: 'send-mail',
    component: SendMailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
