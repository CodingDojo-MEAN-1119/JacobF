import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';

import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() tasks;
  task: Task;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  selectTask(task) {
    this.task = task;
    console.log(task)
  }

  deleteTask() {
    this.httpService.deleteTask(this.task._id)
      .subscribe(() => {
        this.tasks = this.tasks.filter(currentTask => currentTask._id !== this.task._id);
        this.task = null;
      });
  }

  updateTask(task: Task) {
    this.httpService.updateTask(task._id, task)
      .subscribe(thisTask => {
        this.task = thisTask;
        this.tasks = this.tasks.map(currentTask => currentTask._id === thisTask._id ? thisTask : currentTask);
      });
  }


}
