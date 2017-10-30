import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage, PopoverController, AlertController } from 'ionic-angular';

import { Observable } from "rxjs/Rx";

import { Distribuidor } from '../../model/distribuidor';
import { Geolocalizacao } from '../../model/geolocalizacao';
import { Usuario } from '../../model/usuario';

import { AuthProvider } from '../../providers/auth/auth';
import { DistribuidoresProvider } from '../../providers/distribuidores/distribuidores';
import { EnderecosProvider } from '../../providers/enderecos/enderecos';
import { GeocodeProvider } from '../../providers/geocode/geocode';
import { GeolocalizacaoProvider } from '../../providers/geolocalizacao/geolocalizacao';
import { UsuariosProvider } from '../../providers/usuarios/usuarios';
import { Endereco } from '../../model/endereco';
import { AvaliacoesDistribuidor } from '../../model/avaliacoes-distribuidor';
import { PopoverConfiguracoesHomeComponent } from '../../components/popover-configuracoes-home/popover-configuracoes-home';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: Usuario;
  distribuidores: Distribuidor[];

  geolocalizacaoUsuario: Geolocalizacao;
  descricaoEnderecoUsuario: string;

  enderecosCarregados: boolean = false;
  avaliacoesCarregadas: boolean = false;

  static NUMERO_TOTAL_ETAPAS: number = 7;

  etapasConcluidas: number = 0;
  progresso: number = 0;

  constructor(public navCtrl: NavController, public loadContrl: LoadingController,
    public popoverCtrl: PopoverController, public alertCtrl: AlertController,
    public authProvider: AuthProvider, public distribuidoresProvider: DistribuidoresProvider,
    public usuariosProvider: UsuariosProvider, public endercosProvider: EnderecosProvider,
    public geolocalizacaoProvider: GeolocalizacaoProvider, public geocodeProvider: GeocodeProvider) {
    this.initGeolocalizacao();
    this.initDistribuidores();
  }

  initGeolocalizacao() {
    this.geolocalizacaoProvider.getGeolocalizacao()
      .then(geolocalizacao => {
        this.geolocalizacaoUsuario = geolocalizacao;
        this.initDescricaoEndereco();
        this.atualizarProgresso();
      }, error => {
        console.log(error);
        this.atualizarProgresso();
      });
  }

  initDescricaoEndereco() {
    this.geocodeProvider.getDescricaoEndereco(this.geolocalizacaoUsuario)
      .subscribe(descricaoEndereco => {
        this.descricaoEnderecoUsuario = descricaoEndereco;
        this.atualizarProgresso();
      }, error => {
        console.log(error)
        this.atualizarProgresso();
      })
  }

  initDistribuidores() {
    this.enderecosCarregados = false;
    this.avaliacoesCarregadas = false;

    this.distribuidoresProvider.listarDistribuidores()
      .then(distribuidores => {
        this.distribuidores = distribuidores;
        this.initAvaliacoesDistribuidores();
        this.initEnderecosDistribuidores();
        this.atualizarProgresso();
      }, error => {
        console.log(error);
        this.atualizarProgresso();
      });
  }

  initEnderecosDistribuidores() {
    let promises: Promise<Endereco>[] = [];

    this.distribuidores.forEach(distribuidor => {
      let promise: Promise<Endereco> = this.distribuidoresProvider.getEnderecoDistribuidor(distribuidor);
      promise.then(endereco => {
          distribuidor.enderecoPrincipal = endereco;
        }, error => {
          console.log(error);
        });
      promises.push(promise);
    });

    Promise.all(promises)
      .then(values => {
        this.ordenarDistribuidoresPelaDistancia();
        this.enderecosCarregados = true;
        this.atualizarProgresso();
      }, error => {
        console.log(error);
      });
  }

  initAvaliacoesDistribuidores() {
    let promises: Promise<AvaliacoesDistribuidor>[] = [];

    this.distribuidores.forEach(distribuidor => {
      let promise: Promise<AvaliacoesDistribuidor> = this.distribuidoresProvider.getAvaliacoesDistribuidor(distribuidor);
      promise.then(avaliacoes => {
          distribuidor.avaliacoes = avaliacoes;
          this.atualizarProgresso();
        }, error => {
          console.log(error);
        });
      promises.push(promise);
    });

    Promise.all(promises)
      .then(values => {
        // this.ordenarDistribuidoresPelasAvaliacoes();
        this.avaliacoesCarregadas = true;
      }, error => {
        console.log(error);
      });
  }

  ordenarDistribuidoresPelaDistancia() {
    if (this.enderecosCarregados && this.geolocalizacaoUsuario)
      this.distribuidores
        .sort((a, b) => a.enderecoPrincipal.getDistancia(this.geolocalizacaoUsuario) - b.enderecoPrincipal.getDistancia(this.geolocalizacaoUsuario));
        this.atualizarProgresso();
  }

  ordenarDistribuidoresPelasAvaliacoes() {
    if (this.avaliacoesCarregadas)
      this.distribuidores
        .sort((a, b) => b.avaliacoes.getMedia() - a.avaliacoes.getMedia());
  }

  ordenarDistribuidoresPorOrdemAlfabetica() {
    this.distribuidores
      .sort((a, b) => a.nomeFantasia.localeCompare(b.nomeFantasia));
  }

  mostrarPopoverConfiguracoesHome(event) {
    let popover = this.popoverCtrl.create("PopoverConfiguracoesHomeComponent", {
      geolocalizacaoCarregada: this.geolocalizacaoUsuario != null,
      enderecosCarregados: this.enderecosCarregados,
      avaliacoesCarregadas: this.avaliacoesCarregadas
    });
    popover.onDidDismiss((data, role) => {
      if (data) {
        switch (data.opcao) {
          case PopoverConfiguracoesHomeComponent.ORDENAR_POR_DISTANCIA:
            this.ordenarDistribuidoresPelaDistancia();
            break;
          case PopoverConfiguracoesHomeComponent.ORDENAR_POR_AVALIACAO:
            this.ordenarDistribuidoresPelasAvaliacoes();
            break;
          case PopoverConfiguracoesHomeComponent.ORDENAR_POR_ORDEM_ALFABETICA:
            this.ordenarDistribuidoresPorOrdemAlfabetica();
            break;
          default:
            break;
        }
      }
    });
    popover.present({
      ev: event
    });
  }

  atualizarProgresso() {
    this.etapasConcluidas++;
    this.progresso = Math.round((this.etapasConcluidas / HomePage.NUMERO_TOTAL_ETAPAS) * 100) ;
  }

}
