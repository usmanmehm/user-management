import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//HERE IS PARENT COMPONENT
import { AuthComponent } from './auth.component';
//HERE IS CHILD COMPONENTS
import { LoginPage, RegisterPage } from './contents';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      //HERE IS SET DEFAULT LOGIN PAGE
      //HERE IS LOGIN AND REGISTER PAGES
      { path: 'login', component: LoginPage },
      { path: 'register', component: RegisterPage },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: '/error' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
