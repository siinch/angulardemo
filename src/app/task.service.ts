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

  constructor(private messageService: MessageService) { }
}
