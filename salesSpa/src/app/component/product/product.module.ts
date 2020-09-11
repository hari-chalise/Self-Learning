import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductFormComponent } from './product-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import  { RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
// import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeleteConfirmModule} from '../../shared/delete-confirm/delete-confirm.module'
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [ProductComponent, ProductFormComponent],
  imports: [

    CommonModule,
    MatCardModule,
    MatMenuModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
    DeleteConfirmModule,
    RouterModule.forChild([
      {path: '', component: ProductComponent}
    ])
  ],
  entryComponents: [ProductFormComponent]
})
export class ProductModule { }
