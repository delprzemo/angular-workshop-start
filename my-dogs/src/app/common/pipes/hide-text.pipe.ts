import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideText'
})
export class HideTextPipe implements PipeTransform {

  transform(value: string, max: number): string {
    if (!value) 
      return value;

    if(value.length > max) {
      return value.substr(0, max) + '...';
    } else {
      return value;
    }
  }

}
