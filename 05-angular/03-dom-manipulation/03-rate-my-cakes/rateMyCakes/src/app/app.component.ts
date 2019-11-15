import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

import { Cake } from './models/cake';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rateMyCakes';
  cakes: Cake[] = [];
  newCake: Cake;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.getAllCakesFromService();
    this.newCake = { baker: '', imageUrl: '' };
  }

  getAllCakesFromService() {
    this.httpService.getAllCakes()
      .subscribe(allCakes => {
        console.log(allCakes);
        this.cakes = allCakes;
      });
  }

  onSubmit(event: Event) {
    event.stopPropagation();
    this.httpService.createNewCake(this.newCake)
      .subscribe(() => {
        this.getAllCakesFromService();
        this.newCake = { baker: '', imageUrl: '' };
      });
  }

}
