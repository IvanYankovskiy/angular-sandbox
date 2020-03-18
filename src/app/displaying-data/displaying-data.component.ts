import { Component, OnInit } from '@angular/core';
import {Protocol} from './protocol';

@Component({
  selector: 'app-displaying-data',
  templateUrl: './displaying-data.component.html',
  styleUrls: ['./displaying-data.component.css']
})
export class DisplayingDataComponent implements OnInit {
  title = 'Tour of Protocols';
  protocols = [
    new Protocol(1, 'Http'),
    new Protocol(12, 'WebSocket'),
    new Protocol(23, 'SMTP'),
    new Protocol(32, 'FTP')
  ];
  myProtocol = this.protocols[0];
  constructor() {
  }

  ngOnInit() {
  }

}
