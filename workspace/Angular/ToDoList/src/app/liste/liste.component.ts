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
    new Task("Java","Faire la POO"),
    new Task("Symphny","Découverte"),
    new Task("PHP","Apprendre Backend"),
  ];

  addTask(n:string, d:string) {
    this.taskList.push(new Task(n, d));
    console.log(this.taskList);
  }
  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
      console.log("Remove task "+index);
    }
  }
}
