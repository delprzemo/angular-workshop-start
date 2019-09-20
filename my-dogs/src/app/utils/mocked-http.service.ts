import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MockedHttpService {

  constructor() { }

  getDataAsync(data: any): Observable<any> {
    return new Observable
    (
      observer => {
        setTimeout(() => {observer.next(data);}, 1500);
        setTimeout(() => {observer.complete();}, 4000);
      }
    );
  }
}
