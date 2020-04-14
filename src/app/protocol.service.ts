import { Injectable } from '@angular/core';
import { Protocol } from './model/protocol';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  private protocolsUrl = 'api/protocols';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getProtocols(): Observable<Protocol[]> {
    return this.http.get<Protocol[]>(this.protocolsUrl)
      .pipe(
        tap(_ => this.log('fetched protocols')),
        catchError(this.handleError<Protocol[]>('getProtocols', []))
      );
  }

  getProtocol(id: number): Observable<Protocol> {
    const url = `${this.protocolsUrl}/${id}`;
    return this.http.get<Protocol>(url).pipe(
      tap(_ => this.log(`fetched protocol id=${id}`)),
      catchError(this.handleError<Protocol>(`getProtocol id=${id}`))
    );
  }

  /** POST: add a new protocol to the server */
  addProtocol(protocol: Protocol): Observable<Protocol> {
    return this.http.post<Protocol>(this.protocolsUrl, protocol, this.httpOptions).pipe(
      tap((newProtocol: Protocol) => this.log(`added protocol w/ id=${newProtocol.id}`)),
      catchError(this.handleError<Protocol>('addProtocol'))
    );
  }

  /** PUT: update the protocol on the server */
  updateProtocol(protocol: Protocol): Observable<any> {
    return this.http.put(this.protocolsUrl, protocol, this.httpOptions).pipe(
      tap(_ => this.log(`updated protocol id=${protocol.id}`)),
      catchError(this.handleError<any>('updateProtocol'))
    );
  }

  /** DELETE: delete the protocol from the server */
  deleteProtocol(protocol: Protocol | number): Observable<Protocol> {
    const id = typeof protocol === 'number' ? protocol : protocol.id;
    const url = `${this.protocolsUrl}/${id}`;

    return this.http.delete<Protocol>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted protocol id=${id}`)),
      catchError(this.handleError<Protocol>('deleteProtocol'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`ProtocolService: ${message}`);
  }

  constructor(private http: HttpClient,
              private messageService: MessageService) { }
}
