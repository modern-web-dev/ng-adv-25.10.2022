import {Routes} from '@angular/router';
import {UserOverviewComponent} from '@user/components/user-overview/user-overview.component';
import {UserDetailsComponent} from '@user/components/user-details/user-details.component';
import {RouteNotFoundComponent} from '@portal/components/route-not-found/route-not-found.component';

export const routes: Routes = [
  {
    path: 'users',
    children: [
      {path: '', component: UserOverviewComponent},
      {path: ':userId', component: UserDetailsComponent}
    ]
  },
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  {path: '**', component: RouteNotFoundComponent},
];
