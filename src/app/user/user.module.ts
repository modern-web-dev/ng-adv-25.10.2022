import {ModuleWithProviders, NgModule} from '@angular/core';
import {UserService} from './services/user.service';
import {SharedModule} from '@shared/shared.module';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserResultsComponent } from './components/user-results/user-results.component';

@NgModule({
  declarations: [
    UserOverviewComponent,
    UserDetailsComponent,
    UserSearchComponent,
    UserResultsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: []
})
export class UserModule {
  static forRoot(): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [UserService]
    }
  }
}
