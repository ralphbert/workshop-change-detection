import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

let instance = 0;
let colors = ['red', 'green', 'blue', 'gray', 'purple', 'orange'];

@Component({
  selector: 'app-lifecycle-logger',
  template: '',
})
export class LifecycleLoggerComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  color = ``;

  constructor() {
    this.color = `color: ${colors[instance % colors.length]};`;
    instance++;
    console.log(instance, this.color);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.log('ngOnChanges');
  }

  ngOnInit() {
    this.log('ngOnInit');
  }

  ngDoCheck() {
    this.log('ngDoCheck');
  }

  ngAfterContentInit() {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.log('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.log('ngOnDestroy');
  }

  private log(hook: string) {
    console.log('%c' + this.constructor.name + ' - ' + hook, this.color, Date.now());
  }
}
