import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockedHttpService {

  constructor() { }

  getDataAcync(data: any): Observable<any> {
    return new Observable(
      observer => {
        setTimeout(() => observer.next(data), 1500);
        setTimeout(() => observer.complete(), 2000);
      }
    )
  }
}
