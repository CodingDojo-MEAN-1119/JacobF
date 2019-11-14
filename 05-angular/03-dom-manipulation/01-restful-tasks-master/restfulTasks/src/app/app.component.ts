import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restfulTaskAPI';
  tasks: Task[] = [];
  task: Task;

  constructor(private httpService: HttpService) {}


  ngOnInit() {
  }

  getTasksFromService() {
    this.httpService.getTasks()
      .subscribe(allTasks => {
      console.log('Got our tasks!', allTasks);
      this.tasks = allTasks;
    });
  }

  getThisTaskFromService(taskId: string) {
    this.httpService.getThisTask(taskId)
      .subscribe(thisTask => {
        console.log('Got this task!', thisTask);
        this.task = thisTask;
    });
  }

  hideAllTasks() {
    this.tasks = [];
    this.task = null;
  }

}
