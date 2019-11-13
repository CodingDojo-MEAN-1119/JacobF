import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restfulTaskAPI';
  constructor(private httpService: HttpService) {}
  tasks = [];

  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    let observable = this.httpService.getTasks();
    observable.subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data['tasks'];
    });
  }

}
