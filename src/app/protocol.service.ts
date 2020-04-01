import { Injectable } from '@angular/core';
import { Protocol } from './model/protocol';
import { PROTOCOLS } from './model/mock-protocols';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {
  getProtocols(): Observable<Protocol[]> {
    this.messageService.add('ProtocolsService: fetched protocols');
    return of(PROTOCOLS);
  }

  constructor(private messageService: MessageService) { }
}
