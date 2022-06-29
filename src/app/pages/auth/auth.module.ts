import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//HERE IS SHARED MODULE
import { SharedModule } from '@shared/shared.module';

import { AuthRoutingModule } from './auth-routing.module';
//HERE IS AUTH LAYOUT
import { AuthComponent } from './auth.component';
//HERE IS AUTH PAGES
import { LoginPage, RegisterPage } from './contents';
@NgModule({
  declarations: [AuthComponent, LoginPage, RegisterPage],
  imports: [CommonModule, SharedModule, AuthRoutingModule],
})
export class AuthModule {}
