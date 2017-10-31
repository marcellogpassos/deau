import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Distribuidor } from '../../model/distribuidor';
import { ComentariosProvider } from '../../providers/comentarios/comentarios';
import { Comentario } from '../../model/comentario';

/**
 * Generated class for the ComentariosDistribidorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comentarios-distribuidor',
  templateUrl: 'comentarios-distribuidor.html',
})
export class ComentariosDistribuidorPage {

  distribuidor: Distribuidor;
  comentarios: Comentario[];

  nenhumComentario: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public comentariosProvider: ComentariosProvider) {
    this.distribuidor = this.navParams.get("distribuidor");
    this.initComentarios();
  }

  initComentarios() {
    this.comentariosProvider.listarComentariosDistribuidor(this.distribuidor)
      .then(comentarios => {
        if (!comentarios)
          this.nenhumComentario = true;
        else
          this.comentarios = comentarios;
      }, error => {
        console.log(error);
      })
  }

}
