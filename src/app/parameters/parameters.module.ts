import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeDocComponent } from './type-doc/type-doc.component';
import { VolumenesComponent } from './volumenes/volumenes.component';
import { ArcArchivosComponent } from './arc-archivos/arc-archivos.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [TypeDocComponent, VolumenesComponent, ArcArchivosComponent, MenuComponent],
  imports: [
    CommonModule
  ]
})
export class ParametersModule { }
