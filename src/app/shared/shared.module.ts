import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormatDateTimePipe} from '@shared/i18n/format-date-time.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {AgGridModule} from 'ag-grid-angular';
import {DialogFrameComponent} from '@shared/dialogs/dialog-frame.component';

@NgModule({
  declarations: [FormatDateTimePipe, DialogFrameComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule, ReactiveFormsModule, AgGridModule,
    FormatDateTimePipe, DialogFrameComponent
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
