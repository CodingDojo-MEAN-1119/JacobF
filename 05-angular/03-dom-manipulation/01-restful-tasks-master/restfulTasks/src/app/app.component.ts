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
    this.getTasksFromService();
  }

  getTasksFromService() {
    this.httpService.getTasks()
      .subscribe(allTasks => {
      console.log('Got our tasks!', allTasks);
      this.tasks = allTasks;
    });
  }

  getThisTask(taskId: string) {
    this.task = this.tasks.find(task => task._id === taskId);
    if (!this.task) {
      this.httpService.getThisTask(taskId)
        .subscribe(thisTask => {
          console.log('Got this task!', thisTask);
          this.task = thisTask;
        });
    }
  }

}
