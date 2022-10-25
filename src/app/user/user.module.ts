import {ModuleWithProviders, NgModule} from '@angular/core';
import {UserService} from './services/user.service';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [],
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
