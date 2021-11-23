import { Component, OnInit } from '@angular/core';
import {LifecycleLoggerComponent} from '../lifecycle-logger/lifecycle-logger.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends LifecycleLoggerComponent {

}
