import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatDateTimePipe} from '@shared/i18n/format-date-time.pipe';

@NgModule({
  declarations: [FormatDateTimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    FormatDateTimePipe
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: []
    }
  }
}
