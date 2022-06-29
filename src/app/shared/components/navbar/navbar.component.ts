import { Component, OnInit } from '@angular/core';
//HERE IS IMPORTED SERVICES
import { AuthService } from '@core/services/auth';
//HERE IS IMPORTED MODELS
import { PROFILE } from '@models/auth';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  currentUser!: Promise<PROFILE | null>; //HERE IS PROMISE to execute asynmouse function
  constructor(private authService: AuthService) {}//HERE IS injected the auth service into constructor

  ngOnInit(): void {
    this.currentUser = this.authService.userProfile();
  }
  //HERE IS a function to execute the authService
  logOut() {
    this.authService.logOut();
  }
}
