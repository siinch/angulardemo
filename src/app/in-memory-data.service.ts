import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const tasks = [
      {
        "id": 88,
        "title": "feugiat. Sed nec",
        "state": "magnis"
      },
      {
        "id": 24,
        "title": "nulla. In tincidunt",
        "state": "nisi."
      },
      {
        "id": 11,
        "title": "faucibus orci luctus",
        "state": "Nullam"
      },
      {
        "id": 13,
        "title": "vitae nibh. Donec",
        "state": "pharetra,"
      },
      {
        "id": 80,
        "title": "malesuada fames ac",
        "state": "Cras"
      },
      {
        "id": 37,
        "title": "libero est, congue",
        "state": "porttitor"
      },
      {
        "id": 54,
        "title": "Vivamus euismod urna.",
        "state": "est,"
      },
      {
        "id": 92,
        "title": "egestas lacinia. Sed",
        "state": "dictum"
      },
      {
        "id": 60,
        "title": "rutrum lorem ac",
        "state": "nec"
      },
      {
        "id": 12,
        "title": "Integer eu lacus.",
        "state": "porta"
      }
    ];
    return {tasks};
  }

  // Overrides the genId method to ensure that a task always has an id.
  // If the tasks array is empty,
  // the method below returns the initial number (11).
  // if the tasks array is not empty, the method below returns the highest
  // task id + 1.
  genId(tasks: Task[]): number {
    return tasks.length > 0 ? Math.max(...tasks.map(task => task.id)) + 1 : 11;
  }
}