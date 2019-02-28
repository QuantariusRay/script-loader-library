import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  ScriptLoaderModule,
  D3AreaChartModule
} from 'd3-lib';

import { AppComponent }      from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ScriptLoaderModule,
    D3AreaChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
