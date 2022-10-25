import {Component} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User, UserSearchCriteria} from '@user/model';
import {map, Observable, OperatorFunction, switchMap} from 'rxjs';
import {UserService} from '@user/services/user.service';

@Component({
  selector: 'ua-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent {
  readonly criteria$: Observable<UserSearchCriteria>;
  readonly results$: Observable<User[]>;

  constructor(
    private readonly currentRoute: ActivatedRoute,
    private readonly router: Router,
    private readonly users: UserService) {
    this.criteria$ = currentRoute.params.pipe(
      mapFromParamsToCriteria()
    );
    this.results$ = this.criteria$.pipe(
      this.mapFromCriteriaToResults(),
      // mapFromCriteriaToResultsWithService(this.users)
    );
  }

  updateUrlWithNewCriteriaOf(newCriteria: UserSearchCriteria) {
    const params: Params = {query: newCriteria.query || ''};
    this.router.navigate([params], {relativeTo: this.currentRoute}); // -> /users;query=adam
  }

  goToUserDetails(user: User) {
    this.router.navigate([user.id], {relativeTo: this.currentRoute}); // -> /users;query=adam/123
  }

  private mapFromCriteriaToResults(): OperatorFunction<UserSearchCriteria, User[]> {
    return switchMap(criteria => this.users.findBy(criteria));
  }
}

function mapFromCriteriaToResultsWithService(users: UserService):OperatorFunction<UserSearchCriteria, User[]> {
  return switchMap(criteria => users.findBy(criteria));
}

function mapFromParamsToCriteria(): OperatorFunction<Params, UserSearchCriteria> {
  return map<Params, UserSearchCriteria>(params => {
    const criteria: UserSearchCriteria = {};
    const queryValue = params['query'];
    if (queryValue) {
      criteria.query = queryValue;
    }
    return criteria;
  });
}
