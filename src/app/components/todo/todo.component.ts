import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/models/task';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks: Task[] = this.taskSrv.tasks;

  constructor(private taskSrv: TaskService) { }

  ngOnInit(): void {
  }

  addTask(task: string): void {
    this.taskSrv.addTask(task);
    console.log(this.taskSrv.tasks);
  }

  checkTask(id: number) {
    this.taskSrv.completeTask(id);
  }

}