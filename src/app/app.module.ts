import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProtocolsComponent } from './protocols/protocols.component';
import {FormsModule} from '@angular/forms';
import { ProtocolDetailComponent } from './protocol-detail/protocol-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { ProtocolSearchComponent } from './protocol-search/protocol-search.component';
import { OsiComponent } from './osi/osi.component';
import {OsiService} from './osi.service';
import { OsiDetailsComponent } from './osi-details/osi-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtocolsComponent,
    ProtocolDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ProtocolSearchComponent,
    OsiComponent,
    OsiDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [OsiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
