import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import 'hammerjs';
import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatGridListModule, MatInputModule,
  MatSelectModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {CgBusyModule} from '../lib';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule, MatSelectModule, MatInputModule, MatCheckboxModule, MatGridListModule, MatFormFieldModule,
    CgBusyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
