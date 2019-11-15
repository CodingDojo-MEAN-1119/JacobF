import { Component, OnInit } from '@angular/core';
import { HttpService } from './services/http.service';

import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restfulTasks';
  tasks: Task[] = [];
  task: Task;
  newTask: any;
  editForm: boolean;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.newTask = {title: '', description: ''};
  }

  getTasksFromService() {
    this.httpService.getTasks()
      .subscribe(allTasks => {
      console.log('Got our tasks!', allTasks);
      this.tasks = allTasks;
    });
  }

  hideAllTasks() {
    this.tasks = [];
    this.task = null;
    this.editForm = false;
  }

  createTask() {
    this.httpService.createTask(this.newTask)
      .subscribe(newTask => {
        console.log('creating new task', newTask);
        if (this.tasks.length > 0) {
          this.tasks = [... this.tasks, newTask];
        } else {
          this.tasks = [];
        }
      });
    this.newTask = {title: '', description: ''};
  }

}
