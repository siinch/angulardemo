import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TASKS } from '../mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = TASKS;

  task: Task = {
    id: 1,
    title: 'Learn Angular',
    state: 'Doing'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
