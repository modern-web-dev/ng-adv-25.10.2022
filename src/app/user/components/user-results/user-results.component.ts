import {Component, Input, OnInit} from '@angular/core';
import {User} from '@user/model';

@Component({
  selector: 'ua-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss']
})
export class UserResultsComponent {
  @Input()
  results: User[] | null = [];
}
