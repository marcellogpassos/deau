import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Uf } from '../../model/uf';
import { Municipio } from '../../model/municipio';
import { MunicipioPadraoProvider } from '../../providers/municipio-padrao/municipio-padrao';

/**
 * Generated class for the MunicipioPadraoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-municipio-padrao',
  templateUrl: 'municipio-padrao.html',
})
export class MunicipioPadraoPage {

  municipioInicializacao: Municipio;

  ufs: Uf[];
  municipios: Municipio[];

  uf: Uf;
  municipio: Municipio;

  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public municipioPadraoProvider: MunicipioPadraoProvider, public loadingCtrl: LoadingController) {
    this.ufs = Uf.getUfs();
    this.ufs.sort((a, b) => a.descricao.localeCompare(b.descricao));
    if (this.navParams.get("municipio")) 
      this.inicializacao(this.navParams.get("municipio"));
  }

  inicializacao(municipio: Municipio) {
    this.municipioInicializacao = municipio;
    this.setUf(this.municipioInicializacao.uf.codigo);
    this.initMunicipios(true);
  }

  ufSelecionado(event) {
    this.initMunicipios(false);
  }

  initMunicipios(inicializacao?: boolean) {
    this.presentLoading();
    this.municipioPadraoProvider.listarMunicipios(this.uf)
      .subscribe(municipios => {
        this.municipio = null;
        this.loading.dismiss().then(() => {
          this.municipios = municipios;
          if (inicializacao)
            this.setMunicipio(this.municipioInicializacao.codigo);
        });
      });
  }

  escolherMunicipio() {
    this.municipioPadraoProvider.salvarMunicipioPadrao(this.municipio)
      .then(() => {
        this.navCtrl.setRoot("HomePage");
      });
  }

  presentLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Carregando a lista de municípios...",
      spinner: "dots",
    });
    this.loading.present();
  }

  setUf(codigo: string) {
    this.ufs.forEach(element => {
      if (element.codigo == codigo)
        this.uf = element;
    });
  }

  setMunicipio(codigo: string) {
    this.municipios.forEach(element => {
      if (element.codigo == codigo)
        this.municipio = element;
    });
  }

}
