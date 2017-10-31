import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TelefonePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    value = value + "";
    return value.replace(/\D/g,"")
      .replace(/^(\d{2})(\d)/g,"($1) $2")
      .replace(/(\d)(\d{4})$/,"$1-$2");
  }
}
