import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

import { Cake } from './models/cake';
import { NgForm } from '@angular/forms';
import { Review } from './models/review';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rateMyCakes';
  cakes: Cake[] = [];
  newCake: any;
  cake: Cake;
  newReview: any;
  reviews: Review[] = [];
  reviewAverage: number;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getAllCakesFromService();
    this.newCake = { baker: '', imageUrl: '' };
    this.newReview = { starRating: 5, comment: ''};
  }

  getAllCakesFromService() {
    this.httpService.getAllCakes()
      .subscribe(allCakes => {
        console.log(allCakes);
        this.cakes = allCakes;
      });
  }

  getCakeDetails(cakeId: string) {
    this.httpService.getThisCake(cakeId)
      .subscribe(thisCake => {
        if (this.cake) {
          this.cake = null;
          this.reviews = [];
          this.reviewAverage = null;
        } else {
          this.cake = thisCake;
        }
      });
    this.httpService.getThisCakeReviews(cakeId)
      .subscribe(allReviews => {
        let sum = 0;
        for (const review of allReviews) {
          sum += review.starRating;
        }
        this.reviewAverage = sum / allReviews.length;
        this.reviews = allReviews;
      });
  }

  onSubmit(event: Event) {
    event.preventDefault();
    this.httpService.createNewCake(this.newCake)
      .subscribe(() => {
        this.getAllCakesFromService();
        this.newCake = { baker: '', imageUrl: '' };
      });
  }

  onReviewSubmit(event: Event, cakeId: string) {
    event.preventDefault();
    this.newReview = { cake: cakeId, starRating: this.newReview.starRating, comment: this.newReview.comment };
    this.httpService.createNewReview(this.newReview)
      .subscribe(() => {
        this.cake = null;
        this.newReview = { starRating: 5, comment: ''};
      });
  }

}
