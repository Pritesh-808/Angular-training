import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:'register',component:RegisterComponent},

  {path:'login',component:LoginComponent,  
  children:[ 
  {path:'forgot',component:ForgotPasswordComponent},
  {path:'reset',component:ResetPasswordComponent}
  ]
},
{path:'dashboard',component:DashboardComponent,
 children:[
   {path:'logout',component:LogoutComponent}
 ]
},
{path:'**',component:PageNotFoundComponent}
 
  
  
  
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
