import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fullname', pure: false })
export class FullNamePipe implements PipeTransform {
  transform(person: { first?: string; last?: string }): string {
    return calcFullName(person);
  }
}

export function calcFullName(person: {
  first?: string;
  last?: string;
}): string {
  return person
    ? ((person.first || '') + ' ' + (person.last || '')).trim()
    : '';
}
