import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { Task } from 'src/app/models/task';


@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  completedTasks: Task[] = this.taskSrv.tasks;

  constructor(private taskSrv: TaskService) { }

  ngOnInit(): void {

  }

}
