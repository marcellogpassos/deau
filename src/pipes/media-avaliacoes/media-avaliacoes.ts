import { Pipe, PipeTransform } from '@angular/core';
import { AvaliacoesDistribuidor } from '../../model/avaliacoes-distribuidor';

/**
 * Generated class for the MediaAvaliacoesPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'mediaAvaliacoes',
})
export class MediaAvaliacoesPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(avaliacoes: AvaliacoesDistribuidor, ...args) {
    return (avaliacoes.total / avaliacoes.quantidade).toFixed(2);
  }
}
