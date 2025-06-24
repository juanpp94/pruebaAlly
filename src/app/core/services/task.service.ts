import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return JSON.parse(localStorage.getItem('tasks')!);
  }

  addTasks(tasks: any[]) {
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
}
