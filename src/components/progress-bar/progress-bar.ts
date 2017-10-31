import { Component, Input } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the ProgressBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'progress-bar',
  template: `
    <div class="total">
      <div class="progresso" color="primary" [ngStyle]="{'width': getProgresso() + '%'}">
      </div>
    </div>`,
  styles: [
    '.total { width: 100%; background-color: #e0e0e0; height: 4px; }',
    '.progresso { width: 100%; background-color: #b71c1c; height: 100%; -webkit-transition: width 0.3s; transition: width 0.3s; }'
  ]
})
export class ProgressBarComponent {

  @Input()
  etapasConcluidas: number;
  @Input()
  numeroTotalEtapas: number;

  constructor() {
  }

  getProgresso() {
    return Math.round((this.etapasConcluidas / this.numeroTotalEtapas) * 100) ;
  }

}
