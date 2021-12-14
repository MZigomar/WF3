import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Mon compteur de clics';
  counterDemo = 'compteur de clics';

  counter = 0;
  min = -10;
  max = 10;

  minus() {
    if (this.counter > this.min) --this.counter;
    console.log('minus pushed');
  }
  plus() {
    if (this.counter < this.max) ++this.counter;
    console.log('plus pushed');
  }
  reset() {
    this.counter = 0;
    console.log('reset pushed');
  }
}
