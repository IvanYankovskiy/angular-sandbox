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
      { id: 20, name: 'Wireless', osi: 'physical' },
      { id: 21, name: 'Bluetooth', osi: 'physical' },
      { id: 22, name: 'USB', osi: 'physical' },
      { id: 23, name: 'CAN', osi: 'physical' },
    ];
    const osiLevels: OsiLevel[] = [
      { id: 1, name: 'physical', description: 'The physical layer is responsible for the transmission and reception' +
          ' of unstructured raw data between a device and a physical transmission medium. It converts the digital bits ' +
          'into electrical, radio, or optical signals' },
      { id: 2, name: 'datalink', description: 'The data link layer provides node-to-node data transfer—a link between ' +
          'two directly connected nodes. It detects and possibly corrects errors that may occur in the physical layer.' +
          ' It defines the protocol to establish and terminate a connection between two physically connected devices.' },
      { id: 3, name: 'network', description: 'The network layer provides the functional and procedural means of ' +
          'transferring variable length data sequences (called packets) from one node to another connected in ' +
          '"different networks". A network is a medium to which many nodes can be connected, on which every node has ' +
          'an address and which permits nodes connected to it to transfer messages to other nodes connected to it ' +
          'by merely providing the content of a message and the address of the destination node and letting the network' +
          ' find the way to deliver the message to the destination node, possibly routing it through intermediate nodes.' },
      { id: 4, name: 'transport', description: 'The transport layer provides the functional and procedural means ' +
          'of transferring variable-length data sequences from a source to a destination host, while maintaining the' +
          ' quality of service functions.\n' +
          'The transport layer controls the reliability of a given link through flow control, ' +
          'segmentation/desegmentation, and error control.' },
      { id: 5, name: 'session', description: 'The session layer controls the dialogues (connections) between computers.' +
          ' It establishes, manages and terminates the connections between the local and remote application. ' +
          'It provides for full-duplex, half-duplex, or simplex operation, and establishes procedures for checkpointing,' +
          ' suspending, restarting, and terminating a session. In the OSI model, this layer is responsible for' +
          ' gracefully closing a session, which is handled in the Transmission Control Protocol at the transport' +
          ' layer in the Internet Protocol Suite.' },
      { id: 6, name: 'presentation', description: 'The presentation layer establishes context between application-layer' +
          ' entities, in which the application-layer entities may use different syntax and semantics if the' +
          ' presentation service provides a mapping between them.' },
      { id: 7, name: 'application', description: 'The application layer is the OSI layer closest to the end user, ' +
          'which means both the OSI application layer and the user interact directly with the software application.' +
          ' This layer interacts with software applications that implement a communicating component. ' +
          'Such application programs fall outside the scope of the OSI model. Application-layer functions typically' +
          ' include identifying communication partners, determining resource availability, and synchronizing' +
          ' communication. When identifying communication partners, the application layer determines the identity' +
          ' and availability of communication partners for an application with data to transmit. ' +
          'The most important distinction in the application layer is the distinction between the application-entity' +
          ' and the application.' },
    ];
    return {protocols, osiLevels};
  }

  genId(protocols: Protocol[]): number {
    return protocols.length > 0 ? Math.max(...protocols.map(protocol => protocol.id)) + 1 : 11;
  }
}
