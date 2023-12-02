import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Todo } from 'src/app/models/todo';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todos!: Todo[];

  constructor(private taskSrv: TaskService) { }

  ngOnInit(): void {
    this.taskSrv.getTasks().then((todos) => {
      this.todos = todos.filter((task) => task.completed);
    });
  }
}
