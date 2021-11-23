import { Component, OnInit } from '@angular/core';
import {LifecycleLoggerComponent} from '../lifecycle-logger/lifecycle-logger.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends LifecycleLoggerComponent {

}
