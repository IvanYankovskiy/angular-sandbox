import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Protocol} from './model/protocol';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const protocols = [
      { id: 11, name: 'http', osi: 'application'},
      { id: 12, name: 'https', osi: 'application' },
      { id: 13, name: 'WebSocket', osi: 'application' },
      { id: 14, name: 'mqtt', osi: 'application' },
      { id: 15, name: 'ftp', osi: 'application' },
      { id: 16, name: 'udp', osi: 'transport' },
      { id: 17, name: 'tcp', osi: 'transport' },
      { id: 18, name: 'ip', osi: 'network' },
      { id: 19, name: 'Ethernet', osi: 'datalink' },
      { id: 20, name: 'Wireless', osi: 'physical' }
    ];
    return {protocols};
  }

  genId(protocols: Protocol[]): number {
    return protocols.length > 0 ? Math.max(...protocols.map(protocol => protocol.id)) + 1 : 11;
  }
}
