import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  todoArr: Todo[] = [];

  addTask(task: Partial<Todo>): Promise<Todo> {
    return new Promise((resp) => {
      setTimeout(() => {
        let input = document.getElementById('input') as HTMLInputElement;
        if (input.value != '') {

        }
      }), 2000
    });
  }

  getTask() {
    return this.todoArr
  }

  updateTask() { }

  constructor() { }


  // addTask(task: Partial<Todo>): Promise<Todo> {
  //   return new Promise((resp) => {
  //     setTimeout(() => {
  //       const newTask: Partial<Todo> = { ...task, id: this.tasks.length + 1 }
  //       this.tasks.push(newTask as Todo);
  //       resp(newTask as Todo)
  //     }, 2000)

  //   })
  // }

  // getTask(): Promise<Todo[]> {
  //   return new Promise((resp) => {
  //     setTimeout(() => {
  //       resp(this.tasks)
  //     }, 2000);
  //   });
  // }


  // update(newTodo: Partial<Todo>, id: number): Promise<Todo> {
  //   return new Promise((resp) => {
  //     setTimeout(() => {
  //       this.tasks = this.tasks.map((todo) => {
  //         return todo.id === id ? { ...todo, ...newTodo } : todo;
  //       });
  //       const update: Todo | undefined = this.tasks.find((todo) => todo.id === id);
  //       resp(update as Todo);
  //     }, 2000);
  //   });
  // }

}
