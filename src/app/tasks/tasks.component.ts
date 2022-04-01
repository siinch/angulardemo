import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  tasks: Task[] = [];

  selectedTask?: Task;

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);;
  }

  onSelect(task: Task): void {
    this.selectedTask = task;
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
