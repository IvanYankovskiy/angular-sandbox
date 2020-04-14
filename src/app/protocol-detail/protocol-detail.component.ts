import {Component, Input, OnInit} from '@angular/core';
import {Protocol} from '../model/protocol';
import {ActivatedRoute} from '@angular/router';
import {ProtocolService} from '../protocol.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-protocol-detail',
  templateUrl: './protocol-detail.component.html',
  styleUrls: ['./protocol-detail.component.css']
})
export class ProtocolDetailComponent implements OnInit {
  @Input()
  protocol: Protocol;

  constructor(private route: ActivatedRoute,
              private protocolService: ProtocolService,
              private location: Location) { }

  ngOnInit() {
    this.getProtocol();
  }

  getProtocol(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.protocolService.getProtocol(id)
      .subscribe(protocol => this.protocol = protocol);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.protocolService.updateProtocol(this.protocol)
      .subscribe(() => this.goBack());
  }

}
