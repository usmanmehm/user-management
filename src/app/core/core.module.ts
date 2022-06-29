import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//HERE IS COOKIE SERVICE
import { CookieService } from 'ngx-cookie-service';
//HERE IS HTTP CLIENT
import { HttpClientModule } from '@angular/common/http';
//HERE IS SNACKBAR MODULE FOR NOTIFICATIONS
import { MatSnackBarModule } from '@angular/material/snack-bar';
//HERE IS LOADING SPINNER
import { OverlayModule } from '@angular/cdk/overlay';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingSpinner } from '@shared/components';
//HERE IS HTTP INTERCEPTOR
import { httpInterceptorProviders } from './interceptors';
@NgModule({
  declarations: [LoadingSpinner],
  imports: [
    CommonModule,
    HttpClientModule,
    MatSnackBarModule,
    OverlayModule,
    MatProgressSpinnerModule,
  ],
  providers: [CookieService, httpInterceptorProviders],
})
export class CoreModule {}
