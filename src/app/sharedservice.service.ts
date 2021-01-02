import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {
  readonly api = 'http://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<any>(this.api);
  }
}
