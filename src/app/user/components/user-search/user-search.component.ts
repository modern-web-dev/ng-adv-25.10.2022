import {ChangeDetectionStrategy, Component, EventEmitter, Input} from '@angular/core';
import {UserSearchCriteria} from '@user/model';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'ua-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserSearchComponent {
  readonly queryFormControl = new FormControl<string | null>(null);

  readonly criteriaChange = new EventEmitter<UserSearchCriteria>();

  @Input()
  set criteria(newCriteria: UserSearchCriteria | null) {
    this.queryFormControl.setValue(newCriteria?.query ?? null);
  }

  notifyOnCriteriaChange() {
    if (this.queryFormControl.valid) {
      const changedCriteria: UserSearchCriteria = {};
      if (this.queryFormControl.value) {
        changedCriteria.query = this.queryFormControl.value;
      }
      this.criteriaChange.emit(changedCriteria);
    }
  }
}
