import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//HERE IS ANGULAR FORM MODULES
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//HERE IS SHARED ANGULAR MATERIAL MODULES
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    //HERE IS FORM MODULES IMPORTED
    FormsModule,
    ReactiveFormsModule,
    //HERE IS ANGULAR MATERIAL MODULES IMPORTED
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
})
export class SharedModule {}
