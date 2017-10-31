import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Distribuidor } from '../../model/distribuidor';

/*
  Generated class for the FavoritosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FavoritosProvider {

  constructor(public http: Http, private storage: Storage) {
    
  }

  setFavorito(distribuidor: Distribuidor): Promise<any> {
    return this.listarFavoritos()
      .then((favoritos: string[]) => {
        if (!favoritos)
          return this.storage.set("favoritos", [distribuidor.uid]);
        else if (!this.procurar(distribuidor, favoritos)) {
          favoritos.push(distribuidor.uid);
          return this.storage.set("favoritos", favoritos);
        }
      });
  }

  unsetFavorito(distribuidor: Distribuidor): Promise<any> {
    return this.listarFavoritos()
    .then((favoritos: string[]) => {
      if (favoritos) {
        favoritos.splice(favoritos.indexOf(distribuidor.uid), 1);
        if (favoritos.length)
          return this.storage.set("favoritos", favoritos);
        else
          return this.storage.remove("favoritos");
      }
    });
  }

  listarFavoritos(): Promise<string[]> {
    return this.storage.get("favoritos");
  }

  getFavorito(distribuidor: Distribuidor): Promise<boolean> {
    return this.listarFavoritos()
      .then((favoritos: string[]) => (this.procurar(distribuidor, favoritos) != null));
  }

  procurar(distribuidor: Distribuidor, favoritos: string[]): string {
    if (favoritos)
      return favoritos.find(uid => (uid == distribuidor.uid));
    else
      return null;
  }

}
