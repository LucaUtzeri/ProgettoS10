import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Todo } from 'src/app/models/todo';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodosComponent implements OnInit {
  todos!: Todo[];
  taskTitle: string | undefined;

  constructor(private taskSrv: TaskService) { }

  ngOnInit(): void {
    this.taskSrv.getTasks().then((todos) => {
      this.todos = todos.filter((todo) => !todo.completed);
    });
  }

  async addNew() {
    if (this.taskTitle != undefined) {
      const nuovo = await this.taskSrv.addNewTask({
        title: this.taskTitle,
        completed: false,
      });
      this.todos.push(nuovo);
      this.taskTitle = '';
    }
    return;
  }

  async checkTask(todo: Todo, i: number) {
    await this.taskSrv.updateTask({ completed: true }, todo.id);
    this.todos.splice(i, 1);
  }
}
