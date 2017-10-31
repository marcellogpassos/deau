import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DistribuidoresProvider } from '../../providers/distribuidores/distribuidores';
import { Distribuidor } from '../../model/distribuidor';
import { AuthProvider } from '../../providers/auth/auth';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

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

  usuarioAutenticado: boolean;

  favorito: boolean;

  imagemCarregada: boolean;

  static NUMERO_TOTAL_ETAPAS: number = 6;
  etapasConcluidas: number = 0;
  
  self = DistribuidorPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public distribuidoresProvider: DistribuidoresProvider, public authProvider: AuthProvider,
    public favoritosProvider: FavoritosProvider) {
    this.uid = this.navParams.get("uid");
    this.initDistribuidor();
    this.usuarioAutenticado = (this.authProvider.getCurrentUser() != null);
  }

  initDistribuidor() {
    this.distribuidoresProvider.getDistribuidor(this.uid)
      .then(distribuidor => {
        this.distribuidor = distribuidor;
        this.initFavorito();
        this.initImagemDistribuidor();
        this.initAvaliacoesDistribuidor();
        this.initEnderecoDistribuidor();
        this.etapasConcluidas++;
      }, error => {
        console.log(error);
        this.etapasConcluidas++;
      });
  }

  initFavorito() {
    this.favoritosProvider.getFavorito(this.distribuidor)
      .then(favorito => {
        this.favorito = favorito;
        this.etapasConcluidas++;
      }, error => {
        this.favorito = false;
        this.etapasConcluidas++;
      });
  }

  initImagemDistribuidor() {
    this.distribuidoresProvider.getImagemGrandeDistribuidor(this.distribuidor)
      .then(url => {
        this.distribuidor.imagemGrandeUrl = url;
        this.etapasConcluidas++;
      }, error => {
        console.log(error);
        this.etapasConcluidas++;
      })
  }

  initAvaliacoesDistribuidor() {
    this.distribuidoresProvider.getAvaliacoesDistribuidor(this.distribuidor)
      .then(avaliacoes => {
        this.distribuidor.avaliacoes = avaliacoes;
        this.etapasConcluidas++;
      }, error => {
        console.log(error);
        this.etapasConcluidas++;
      });
  }

  initEnderecoDistribuidor() {
    this.distribuidoresProvider.getEnderecoDistribuidor(this.distribuidor)
      .then(endereco => {
        this.distribuidor.enderecoPrincipal = endereco;
        this.etapasConcluidas++;
      }, error => {
        console.log(error);
        this.etapasConcluidas++;
      });
  }

  notificarImagemCarregada() {
    this.imagemCarregada = true;
    this.etapasConcluidas++;
  }

  alternarFavorito() {
    if (!this.favorito)
      this.favoritosProvider.setFavorito(this.distribuidor)
        .then(value => this.favorito = true);
    if (this.favorito)
      this.favoritosProvider.unsetFavorito(this.distribuidor)
        .then(value => this.favorito = false);
  }

}
