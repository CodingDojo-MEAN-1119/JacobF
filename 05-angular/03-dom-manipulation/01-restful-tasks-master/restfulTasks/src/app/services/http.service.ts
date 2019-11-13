import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Task } from '../models/task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/tasks');
  }

  getThisTask(taskId: string): Observable<Task> {
    return this.http.get<Task>(`/tasks/${taskId}`);
  }

}

