import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatDateTimePipe} from '@shared/i18n/format-date-time.pipe';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [FormatDateTimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, ReactiveFormsModule,
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
