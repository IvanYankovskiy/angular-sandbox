import { Component } from '@angular/core';
import {Protocol} from './model/protocol';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Protocols';
  selectedProtocol: Protocol;

  setSelectedProtocol(input: Protocol) {
    this.selectedProtocol = input;
  }
}
