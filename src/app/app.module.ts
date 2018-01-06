import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import {
  MdButtonModule,
  MdSelectModule,
  MdInputModule,
  MdCheckboxModule,
  MdGridListModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {cgBusyModule} from '../lib/cgBusy.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MdButtonModule, MdSelectModule, MdInputModule, MdCheckboxModule, MdGridListModule,
    cgBusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
