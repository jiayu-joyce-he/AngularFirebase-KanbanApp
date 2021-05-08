import { Component } from '@angular/core';
import { Task } from './task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todo: Task[] = [
    { title: 'Buy mild', description: 'Go to the store to get milk' },
    { title: 'Create Kanban board', description: 'Develop a Kanban app' },
  ];
}
