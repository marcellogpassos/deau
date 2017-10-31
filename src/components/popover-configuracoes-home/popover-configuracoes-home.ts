import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PopoverConfiguracoesHomeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@IonicPage()
@Component({
  selector: 'popover-configuracoes-home',
  template: 
    `<div class="popover">
      <ion-list>
        <button ion-item *ngIf="mostraOrdenarPorDistancia" (click)="ordenarPorDistancia()">Ordenar por distância</button>
        <button ion-item *ngIf="mostraOrdenarPorAvaliacao" (click)="ordenarPorAvaliacao()">Ordenar por avaliação</button>
        <button ion-item *ngIf="mostraOrdenarPorOrdemAlfabetica" (click)="ordenarPorOrdemAlfabetica()">Ordenar por ordem alfabética</button>
      </ion-list>
    <div>`,
  styles: ['.popover ion-list.list-md { margin-bottom: 0; }']
})
export class PopoverConfiguracoesHomeComponent {

  static ORDENAR_POR_DISTANCIA: number = 0;
  static ORDENAR_POR_AVALIACAO: number = 1;
  static ORDENAR_POR_ORDEM_ALFABETICA: number = 2;

  mostraOrdenarPorDistancia: boolean;
  mostraOrdenarPorAvaliacao: boolean;
  mostraOrdenarPorOrdemAlfabetica: boolean;

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.mostraOrdenarPorDistancia = navParams.get("geolocalizacaoCarregada") && navParams.get("enderecosCarregados");
    this.mostraOrdenarPorAvaliacao = navParams.get("avaliacoesCarregadas");
    this.mostraOrdenarPorOrdemAlfabetica = true;
  }

  ordenarPorDistancia() {
    this.sair(PopoverConfiguracoesHomeComponent.ORDENAR_POR_DISTANCIA);
  }

  ordenarPorAvaliacao() {
    this.sair(PopoverConfiguracoesHomeComponent.ORDENAR_POR_AVALIACAO);
  }

  ordenarPorOrdemAlfabetica() {
    this.sair(PopoverConfiguracoesHomeComponent.ORDENAR_POR_ORDEM_ALFABETICA);
  }

  sair(opcao: number) {
    this.viewCtrl.dismiss({
      opcao: opcao
    });
  }

}
