import { Component } from '@angular/core';

@Component({
  selector: 'app-feature2',
  imports: [],
  templateUrl: './feature2.html',
  styleUrl: './feature2.css',
})
export class Feature2 {
  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }
}
