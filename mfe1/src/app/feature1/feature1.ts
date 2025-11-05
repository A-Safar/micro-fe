import { Component } from '@angular/core';
import { AutoUnsubscribe } from '../auto-unsubscribe';
import { of, takeUntil } from 'rxjs';

@Component({
  selector: 'app-feature1',
  imports: [],
  templateUrl: './feature1.html',
  styleUrl: './feature1.css',
})
export class Feature1 extends AutoUnsubscribe {

  someObservable = of('Feature1 Observable Value');
  constructor() {
    super();

    this.someObservable.pipe(
      takeUntil(this.destroy$)
    ).subscribe(value => {
      console.log(value);
    });
  }
  onButtonClick() {
    alert('Hello from MFE1 Feature1 Component!');
  }
}
