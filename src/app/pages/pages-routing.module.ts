import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//HERE IS GUARDS
import { AdminGuard } from '@core/guards';
//HERE IS PARENT
import { PagesComponent } from './pages.component';
//HERE IS PAGES
import { HomeComponent as HomePage } from './home/home.component';
import { UserListComponent as UserListPage } from './user-list/user-list.component';
const routes: Routes = [
  {
    path: '',

    component: PagesComponent,
    children: [
      { path: 'home',  component: HomePage }, //HERE IS home routes array
      {
        path: 'user-list',
        component: UserListPage,
        canLoad: [AdminGuard],
        canActivate: [AdminGuard],
      },
      {path:'',pathMatch:'full',redirectTo:'home'} //redirect to home page after authentication if the route is fully match to actual route
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
