import {Component, HostListener, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {User} from '../user-list/user-list.component';
import {HttpClient} from '@angular/common/http';
import {LifecycleLoggerComponent} from '../lifecycle-logger/lifecycle-logger.component';

let counter = 0;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends LifecycleLoggerComponent implements OnInit {

  limit = 0;
  max = 10;
  users: User[] = [];

  constructor(private httpClient: HttpClient) {
    super();
  }

  override ngOnInit() {
    super.ngOnInit();
    this.load();
  }

  onLoad() {
    this.load();
  }

  private setRandomLimit() {
    this.limit += 3;
  }

  load() {
    this.httpClient.get<User[]>('/assets/users.json').subscribe(users => {
      this.setRandomLimit();
      this.users = users.slice(0, Math.max(this.limit % 10, 1));
    });
  }

  changeObject() {
    if (this.users.length) {
      this.users[0].name = 'Foo';
    }
  }
}
