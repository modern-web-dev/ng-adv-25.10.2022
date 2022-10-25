import { Component } from '@angular/core';
import {UserService} from './user/services/user.service';
import {Observable} from 'rxjs';
import {User} from './user/model';

@Component({
  selector: 'ua-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  readonly users$: Observable<User[]>;

  constructor(users: UserService) {
    this.users$ = users.findAll();
  }
}
