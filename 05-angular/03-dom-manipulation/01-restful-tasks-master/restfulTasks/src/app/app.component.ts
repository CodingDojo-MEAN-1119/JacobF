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
  editedTask: Task;
  editForm: boolean;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.newTask = {title: '', description: ''};
    this.editedTask = {_id: '', title: '', description: '', completed: false};
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
    this.editForm = false;
  }

  hideDetails() {
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

  showEditForm() {
    this.editForm = true;
    this.editedTask = this.task;
  }

  closeEditForm() {
    this.editForm = false;
  }

  updateTask(taskId: string) {
    this.httpService.updateTask(taskId, this.editedTask)
      .subscribe(thisTask => {
        console.log('updated this task', thisTask);
        this.task = thisTask;
        this.editForm = false;
      });
  }

  deleteTask(taskId: string) {
    this.httpService.deleteTask(taskId)
      .subscribe(thisTask => {
        console.log('deleted this task', thisTask);
        this.tasks = this.tasks.filter(
          currentTask => currentTask._id !== thisTask._id,
        );
      });
    this.task = null;
  }

}
