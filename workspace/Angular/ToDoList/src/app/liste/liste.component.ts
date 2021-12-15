import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title: string = 'To Do List';
  taskList: Task[] = [
    new Task('Java', 'Faire la POO/COO'),
    new Task('Symphony', 'Découverte totale'),
    new Task('PHP', 'Apprendre à developper le Backend'),
  ];

  taskName: string = '';
  taskDesc: string = '';

  addTask() {
    if (this.taskName != '') {
      this.taskList.push(new Task(this.taskName, this.taskDesc));
      console.log(this.taskList);
      this.taskName = '';
      this.taskDesc = '';
    }
  }

  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
      console.log('Remove task ' + index);
    }
  }
}
