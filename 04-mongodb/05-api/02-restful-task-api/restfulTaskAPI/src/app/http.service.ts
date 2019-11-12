import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.getThisTask();
  }
  getTasks() {
    let tempObservable = this._http.get('/tasks');
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
  getThisTask() {
    let tempObservable = this._http.get('/tasks/5dc3ac6e5c9f696b58d7902e');
    tempObservable.subscribe(data => console.log('Got this task!', data));
  }

}

