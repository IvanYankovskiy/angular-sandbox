import { Component, OnInit } from '@angular/core';
import {Protocol} from '../model/protocol';
import { ProtocolService } from '../protocol.service';

@Component({
  selector: 'app-protocols',
  templateUrl: './protocols.component.html',
  styleUrls: ['./protocols.component.css']
})
export class ProtocolsComponent implements OnInit {
  protocols: Protocol[];
  selectedProtocol: Protocol;

  constructor(private protocolService: ProtocolService) { }

  ngOnInit() {
    this.getProtocols();
  }

  onSelect(protocol: Protocol): void {
    this.selectedProtocol = protocol;
  }

  getProtocols(): void {
    this.protocolService.getProtocols()
      .subscribe(protocols => this.protocols = protocols);
  }

}
