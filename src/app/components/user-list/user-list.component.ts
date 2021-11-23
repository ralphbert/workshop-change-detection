import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {LifecycleLoggerComponent} from '../lifecycle-logger/lifecycle-logger.component';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  // TODO: add me
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent extends LifecycleLoggerComponent {
  @Input() users: User[] = [];

  getName(user: User) {
    // TODO: add me
    // console.log('getName', user.id);
    return user.name;
  }

  // TODO: add me
  /*
  trackUser(i: number, user: User) {
    return user.id;
  }
   */
}
