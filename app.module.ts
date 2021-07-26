import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgModel } from '@angular/forms';
import { CubePipe } from './cube.pipe';
import { SqrtPipe } from './sqrt.pipe';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FundTransferModule } from './fund-transfer/fund-transfer.module';
import { AccountStatementModule } from './account-statement/account-statement.module';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    CubePipe,
    SqrtPipe,
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    AboutComponent,
    PageNotFoundComponent,
    DashboardComponent,
    LogoutComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    FundTransferModule,
    AccountStatementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
