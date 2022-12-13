import { Injectable } from '@angular/core';
import { ToDoInterface } from './ToDoInterface';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  private UserUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}
  ObserToDo(): Observable<ToDoInterface[]> {
    return this.http.get<ToDoInterface[]>(this.UserUrl);
  }
}
