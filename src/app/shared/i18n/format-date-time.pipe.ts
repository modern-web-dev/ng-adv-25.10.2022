import {Pipe, PipeTransform} from '@angular/core';
import {formatDateTime} from './date-utils';

@Pipe({
  name: 'uaFormatDateTime'
})
export class FormatDateTimePipe implements PipeTransform {
  transform(date: Date | null | undefined, part? : 'date' | 'time'): string {
    return formatDateTime(date, part);
  }
}
