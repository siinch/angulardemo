import { Component, OnInit } from '@angular/core';
import { Task } from '../task'
import { TaskService } from '../task.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private messageService: MessageService
    ) { }

  tasks: Task[] = [];

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);;
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
