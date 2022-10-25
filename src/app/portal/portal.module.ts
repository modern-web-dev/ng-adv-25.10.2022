import {NgModule} from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {RouteNotFoundComponent} from './components/route-not-found/route-not-found.component';

@NgModule({
  declarations: [
    RouteNotFoundComponent
  ],
  imports: [
    SharedModule
  ]
})
export class PortalModule {
}
