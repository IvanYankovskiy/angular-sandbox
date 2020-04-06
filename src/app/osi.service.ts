import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {MessageService} from './message.service';
import {Injectable} from '@angular/core';
import {Protocol} from './model/protocol';

@Injectable()
export class OsiService {

  osiUrl = '/api/osiLevels';

  constructor(private http: HttpClient,
              private messageService: MessageService) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getOsiLevels(): Observable<OsiLevel[]> {
    return this.http.get<OsiLevel[]>(this.osiUrl)
      .pipe(
        tap(_ => this.log('fetched osi levels')),
        catchError(this.handleError<OsiLevel[]>('getOsiLevels', []))
      );
  }

  getOsiLevel(id: number) {
    const url = `${this.osiUrl}/${id}`;
    return this.http.get<OsiLevel>(url).pipe(
      tap(_ => this.log(`fetched osi level id=${id}`)),
      catchError(this.handleError<OsiLevel>(`getOsiLevel id=${id}`))
    );
  }

  private log(message: string) {
    this.messageService.add(`OsiService: ${message}`);
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

}
