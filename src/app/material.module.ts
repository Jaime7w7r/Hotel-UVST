import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  exports: [
    MatGridListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatTabsModule,
  
  ]
})
export class MaterialModule { }
