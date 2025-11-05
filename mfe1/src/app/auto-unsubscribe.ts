import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Directive()
export abstract class AutoUnsubscribe implements OnDestroy {
  protected readonly destroy$ = new Subject<void>();

  ngOnDestroy(): void {
    this.destroy$.next();
    console.log('AutoUnsubscribe: Component is being destroyed, unsubscribing from observables.');
    this.destroy$.complete();
  }
}
