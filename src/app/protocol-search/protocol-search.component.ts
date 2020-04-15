import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Protocol} from '../model/protocol';
import {ProtocolService} from '../protocol.service';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-protocol-search',
  templateUrl: './protocol-search.component.html',
  styleUrls: ['./protocol-search.component.css']
})
export class ProtocolSearchComponent implements OnInit {
  protocols$: Observable<Protocol[]>;
  private searchTerms = new Subject<string>();

  constructor(private protocolService: ProtocolService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.protocols$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.protocolService.searchProtocols(term)),
    );
  }
}
