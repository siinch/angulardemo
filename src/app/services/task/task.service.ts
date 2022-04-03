import { Injectable } from '@angular/core';
import { Task } from '../../models/task';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../../services/message/message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasksUrl = 'api/tasks';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(
      tap(_ => this.log('fetched tasks')),
      catchError(this.handleError<Task[]>('getTasks', []))
    );
  }


  getTask(id: number): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url).pipe(
      tap(_ => this.log(`fetched task with id: ${id}`)),
      catchError(this.handleError<Task>(`getTask with id: ${id}`))
    );    
  }

  updateTask(task: Task): Observable<any> {
    return this.http.put(this.tasksUrl, task, this.httpOptions).pipe(
      tap(_ => this.log(`updated task with id: ${task.id}`)),
      catchError(this.handleError<any>(`updateTask`))
    );
  }

  /** POST: add a new task to the server */
  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions).pipe(
      tap((newTask: Task) => this.log(`added task with id=´: ${newTask.id}`)),
      catchError(this.handleError<Task>('addTask'))
    );
  }

  private log(message: string) {
    this.messageService.add(`TaskService: ${message}`);
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<Type>(operation = 'operation', result?: Type) {
    return (error: any): Observable<Type> => { 

      // TODO: send the error to remote logging infrastructure
      console.error(error); 

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error}`)

      return of(result as Type);
    }
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }
}
