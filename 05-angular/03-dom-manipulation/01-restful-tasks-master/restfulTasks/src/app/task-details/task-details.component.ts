import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../services/http.service';

import { Task } from '../models/task';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() task;
  editForm: boolean;
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDelete = new EventEmitter<Task>();
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onUpdate = new EventEmitter<Task>();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  hideDetails() {
    this.task = null;
    console.log(this.task);
    this.editForm = false;
  }

  showEditForm() {
    this.editForm = true;
  }

  closeEditForm() {
    this.editForm = false;
  }

  updateTask(editForm: NgForm) {
    this.onUpdate.emit({... editForm.value, _id: this.task._id});
    this.editForm = false;
  }

  deleteTask(taskId: string) {
    this.onDelete.emit();
  }

}
