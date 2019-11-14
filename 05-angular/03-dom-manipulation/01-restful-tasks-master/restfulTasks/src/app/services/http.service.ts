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

  createTask(newTask): Observable<Task> {
    return this.http.post<Task>('/tasks', newTask);
  }

  updateTask(taskId: string, editedTask: Task): Observable<Task> {
    return this.http.put<Task>(`/tasks/${taskId}`, editedTask);
  }

  deleteTask(taskId: string): Observable<Task> {
    return this.http.delete<Task>(`/tasks/${taskId}`);
  }

}

