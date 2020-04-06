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

  constructor(private protocolService: ProtocolService) { }

  ngOnInit() {
    this.getProtocols();
  }

  getProtocols(): void {
    this.protocolService.getProtocols()
      .subscribe(protocols => this.protocols = protocols);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.protocolService.addProtocol({ name } as Protocol)
      .subscribe(protocol => {
        this.protocols.push(protocol);
      });
  }

  delete(protocol: Protocol): void {
    this.protocols = this.protocols.filter(h => h !== protocol);
    this.protocolService.deleteProtocol(protocol).subscribe();
  }

}
