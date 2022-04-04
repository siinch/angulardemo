import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task'
import { TaskService } from '../../services/task/task.service';
import { MessageService } from '../../services/message/message.service';

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

  add(title: string): void {
    title = title.trim();
    const state = 'Backlog';
    if (!title) { return; }
    this.taskService.addTask({ title, state } as Task)
      .subscribe(task => {
        this.tasks.push(task);
      });
  }

  delete(task: Task): void {
    this.tasks = this.tasks.filter(t => t !== task);
    this.taskService.deleteTask(task.id).subscribe();
  }

  ngOnInit(): void {
    this.getTasks();
  }

}
