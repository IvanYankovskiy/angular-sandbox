import { Component, OnInit } from '@angular/core';
import {Protocol} from '../model/protocol';
import {PROTOCOLS} from '../model/mock-protocols';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit {
  protocols = PROTOCOLS;
  selectedProtocol: Protocol;

  constructor() { }

  ngOnInit() {
  }

  onSelect(protocol: Protocol): void {
    this.selectedProtocol = protocol;
  }

}
