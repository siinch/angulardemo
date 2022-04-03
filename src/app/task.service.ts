import { Injectable } from '@angular/core';
import { Task } from './task';
import { TASKS } from './mock-tasks';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'api/tasks';

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }


  getTask(id: number): Observable<Task> {
    // remember to handle exceptions later
    const task = TASKS.find(task => task.id == id)!;
    this.messageService.add(`fetched task: ${JSON.stringify(task)}`);
    return of(task);
  }

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }
}
