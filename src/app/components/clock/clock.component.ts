import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, takeUntil, timer} from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    timer(0, 1000).pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.date = new Date();
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
