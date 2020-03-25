import {Component, Input, OnInit} from '@angular/core';
import {Protocol} from '../model/protocol';

@Component({
  selector: 'app-protocol-detail',
  templateUrl: './protocol-detail.component.html',
  styleUrls: ['./protocol-detail.component.css']
})
export class ProtocolDetailComponent implements OnInit {
  @Input()
  protocol: Protocol;

  constructor() { }

  ngOnInit() {
  }

}
