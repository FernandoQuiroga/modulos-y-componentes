import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {UserModule} from './user/user.module';
import {DocumentsModule} from './documents/documents.module';
import {ParametersModule} from './parameters/parameters.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    DocumentsModule,
    ParametersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
