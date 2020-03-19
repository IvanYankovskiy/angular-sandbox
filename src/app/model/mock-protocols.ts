import {Protocol} from './protocol';

export const PROTOCOLS: Protocol[] = [
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
