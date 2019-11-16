import { Component, OnInit, Input } from '@angular/core';
import { Cake } from '../models/cake';
import { Review } from '../models/review';

@Component({
  selector: 'app-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.css']
})
export class CakeDetailsComponent implements OnInit {
  @Input() cake: Cake;
  @Input() reviews: Review[];
  @Input() reviewAverage: number;

  constructor() { }

  ngOnInit() {
  }

}
