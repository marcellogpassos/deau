import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the CepPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'cep',
})
export class CepPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.replace(/\D/g,"")
      .replace(/^(\d{2})(\d)/,"$1.$2")
      .replace(/\.(\d{3})(\d)/,".$1-$2");
  }
}
