import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialsUser'
})
export class InitialsUserPipe implements PipeTransform {

  transform(name: String): String {
    const parts = name.split(' ');
    return `${parts[0].charAt(0)}${parts[1].charAt(0)}`;
  }

}
