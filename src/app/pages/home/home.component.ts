import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
//HERE IS  SERVICES
import { GlobalDataService } from '@core/services/common';
import { AuthService } from '@core/services/auth';
//HERE IS MODELS
import { PROFILE } from '@models/auth';
//HERE IS ENV
import { environment } from '@environments/environment';
//Here is Http client added
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  readonly userRoles: string[] = environment.userRoles;
  currentUser$: Observable<PROFILE | null> =
    this.globalData.currentUser$.asObservable();
  constructor(private http: HttpClient,
    private globalData: GlobalDataService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  logOut() {
    this.authService.logOut();
  }
}





