import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPrestamoComponent } from './form-prestamo/form-prestamo.component';
import { ListPrestamoComponent } from './list-prestamo/list-prestamo.component';
import { FormRegistroDocComponent } from './form-registro-doc/form-registro-doc.component';

@NgModule({
  declarations: [FormPrestamoComponent, ListPrestamoComponent, FormRegistroDocComponent],
  imports: [
    CommonModule
  ]
})
export class DocumentsModule { }
