import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from '@user/model';
import {ColDef, RowClickedEvent} from 'ag-grid-community';

@Component({
  selector: 'ua-user-results',
  templateUrl: './user-results.component.html',
  styleUrls: ['./user-results.component.scss']
})
export class UserResultsComponent {
  @Input()
  results: User[] | null = [];

  @Output()
  userClick = new EventEmitter<User>();

  readonly columnDefs: ColDef<User>[] = [
    { field: 'firstName'},
    { field: 'lastName'},
    { field: 'createdAt'},
    { field: 'dateOfBirth' }
  ];

  readonly defaultColDef: ColDef<User> = {
    sortable: true
  };

  notifyOnUserClick(event: RowClickedEvent<User>) {
    if (event.data) {
      this.userClick.next(event.data);
    }
  }
}
