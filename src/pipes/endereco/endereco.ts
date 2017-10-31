import { Pipe, PipeTransform } from '@angular/core';
import { Endereco } from '../../model/endereco';

/**
 * Generated class for the EnderecoPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'endereco',
})
export class EnderecoPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: Endereco, ...args) {
    let descricao = value.logradouro + ", " + value.numero + (value.complemento ? ", " + value.complemento : "") + ". ";
    descricao += value.bairro ? value.bairro + ". " : "";
    descricao += value.municipio + " - " + value.uf + ". ";
    descricao += this.transformCep(value.cep) + ".";
    return descricao;
  }

  private transformCep(cep: string): string {
    return cep.replace(/\D/g,"")
      .replace(/^(\d{2})(\d)/,"$1.$2")
      .replace(/\.(\d{3})(\d)/,".$1-$2");
  }

}
