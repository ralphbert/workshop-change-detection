import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeDigit'
})
export class TimeDigitPipe implements PipeTransform {

  transform(value: number | undefined): string {
    if (value != null) {
      return `${value < 10 ? '0' + value : value}`;
    }

    return '00';
  }

}
