import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    this.messageService.add('TaskService: fetched tasks');
    return tasks;
  }


  getTask(id: number): Observable<Task> {
    // remember to handle exceptions later
    const task = TASKS.find(task => task.id == id)!;
    this.messageService.add(`fetched task: ${JSON.stringify(task)}`);
    return of(task);
  }

  constructor(private messageService: MessageService) { }
}
