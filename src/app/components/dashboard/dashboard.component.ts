import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.taskService.getTasks()
      .subscribe(tasks => this.tasks = tasks.slice(1, 5));
  }
}