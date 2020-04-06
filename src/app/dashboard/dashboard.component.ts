import { Component, OnInit } from '@angular/core';
import { Protocol } from '../model/protocol';
import { ProtocolService } from '../protocol.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  protocols: Protocol[] = [];

  constructor(private protocolService: ProtocolService) { }

  ngOnInit() {
    this.getProtocols();
  }

  getProtocols(): void {
    this.protocolService.getProtocols()
      .subscribe(protocols => this.protocols = protocols.slice(1, 5));
  }
}
