import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DisplayingDataComponent } from './displaying-data/displaying-data.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayingDataComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
