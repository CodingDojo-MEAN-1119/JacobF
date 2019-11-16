import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cake } from '../models/cake';
import { Review } from '../models/review';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  getAllCakes(): Observable<Cake[]> {
    return this.http.get<Cake[]>('/cakes');
  }

  getThisCake(cakeId): Observable<Cake> {
    return this.http.get<Cake>(`/cakes/${cakeId}`);
  }

  getThisCakeReviews(cakeId): Observable<Review[]> {
    return this.http.get<Review[]>(`/reviews/${cakeId}`);
  }

  createNewCake(newCake): Observable<Cake> {
    return this.http.post<Cake>('/cakes/new', newCake);
  }

  createNewReview(newReview): Observable<Review> {
    return this.http.post<Review>('/reviews/new', newReview);
  }

}

