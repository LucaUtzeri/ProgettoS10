import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  todos: Todo[] = [];

  constructor() { }

  getTasks(): Promise<Todo[]> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.todos)
      }, 2000);
    });
  }

  addNewTask(todo: Partial<Todo>): Promise<Todo> {
    return new Promise((res) => {
      setTimeout(() => {
        const newTodo: Partial<Todo> = { ...todo, id: this.todos.length + 1 };
        this.todos.push(newTodo as Todo);
        res(newTodo as Todo)
      }, 2000);
    });
  }

  updateTask(newTodo: Partial<Todo>, id: number): Promise<Todo> {
    return new Promise((res) => {
      setTimeout(() => {
        this.todos = this.todos.map((todo) => {
          return todo.id === id ? { ...todo, ...newTodo } : todo;
        });
        const updated: Todo | undefined = this.todos.find((todo) => todo.id === id);
        res(updated as Todo);
      }, 2000);
    });
  }
}