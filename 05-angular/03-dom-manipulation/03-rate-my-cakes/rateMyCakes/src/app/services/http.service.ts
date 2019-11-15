import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getAllCakes(): Observable<Cake[]> {
    return this.http.get<Cake[]>('/cakes');
  }

  createNewCake(newCake): Observable<Cake> {
    return this.http.post<Cake>('/cakes/new', newCake);
  }


}

