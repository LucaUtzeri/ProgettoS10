import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  tasks: Task[] = [];

  constructor() { }

  getTask() {
    return this.tasks;
  }

  addTask(task: string): void {
    this.tasks.push({ id: this.tasks.length, title: task, completed: false })
  }

  completeTask(id: number) {
    this.tasks[id].completed = !this.tasks[id].completed;
  }

}