import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'relativeTime'
})
export class RelativeTimePipe implements PipeTransform {

  transform(value: Date): any {
    const diffMs = Date.now() - value.getTime();
    const ageDt = new Date(diffMs);
    const age = Math.abs(ageDt.getUTCFullYear() - 1970);
    return ` (${age} years old)`;
  }
}
