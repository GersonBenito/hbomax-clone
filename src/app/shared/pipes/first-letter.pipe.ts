import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter'
})
export class FirstLetterPipe implements PipeTransform {

  // obtener la primera letra del nombre de usuario y transformarlo a mayuscula
  transform( value: string ): string {
    let letter = value.substring(0,1).toUpperCase();
    return letter;
  }

}
