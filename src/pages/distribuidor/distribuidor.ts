import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DistribuidoresProvider } from '../../providers/distribuidores/distribuidores';
import { Distribuidor } from '../../model/distribuidor';

/**
 * Generated class for the DistribuidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-distribuidor',
  templateUrl: 'distribuidor.html',
})
export class DistribuidorPage {

  uid: string = "92a9c917-cdbd-4c6e-aec6-d18287364d7c";
  distribuidor: Distribuidor;

  imagemCarregada: boolean;

  static NUMERO_TOTAL_ETAPAS: number = 5;
  etapasConcluidas: number = 0;
  progresso: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public distribuidoresProvider: DistribuidoresProvider) {
    this.uid = this.navParams.get("uid");
    this.initDistribuidor();
  }

  initDistribuidor() {
    this.distribuidoresProvider.getDistribuidor(this.uid)
      .then(distribuidor => {
        this.distribuidor = distribuidor;
        this.initImagemDistribuidor();
        this.initAvaliacoesDistribuidor();
        this.initEnderecoDistribuidor();
        this.atualizarProgresso();
      }, error => {
        console.log(error);
        this.atualizarProgresso();
      });
  }

  initImagemDistribuidor() {
    this.distribuidoresProvider.getImagemGrandeDistribuidor(this.distribuidor)
      .then(url => {
        this.distribuidor.imagemGrandeUrl = url;
        this.atualizarProgresso();
      }, error => {
        console.log(error);
        this.atualizarProgresso();
      })
  }

  initAvaliacoesDistribuidor() {
    this.distribuidoresProvider.getAvaliacoesDistribuidor(this.distribuidor)
      .then(avaliacoes => {
        this.distribuidor.avaliacoes = avaliacoes;
        this.atualizarProgresso();
      }, error => {
        console.log(error);
        this.atualizarProgresso();
      });
  }

  initEnderecoDistribuidor() {
    this.distribuidoresProvider.getEnderecoDistribuidor(this.distribuidor)
      .then(endereco => {
        this.distribuidor.enderecoPrincipal = endereco;
        this.atualizarProgresso();
      }, error => {
        console.log(error);
        this.atualizarProgresso();
      });
  }

  notificarImagemCarregada() {
    this.imagemCarregada = true;
    this.atualizarProgresso();
  }

  atualizarProgresso() {
    this.etapasConcluidas++;
    this.progresso = Math.round((this.etapasConcluidas / DistribuidorPage.NUMERO_TOTAL_ETAPAS) * 100) ;
  }

}
