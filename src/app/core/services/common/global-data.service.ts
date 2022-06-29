import { Injectable } from '@angular/core';
//HERE IS RXJS
import { BehaviorSubject } from 'rxjs';
//HERE IS MODELS
import { PROFILE } from '@models/auth';
@Injectable({
  providedIn: 'root',
})
export class GlobalDataService {
  currentUser$ = new BehaviorSubject<PROFILE | null>(null);
  constructor() {}
}
