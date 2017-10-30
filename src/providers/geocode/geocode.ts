import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Endereco } from "../../model/endereco";
import { Geolocalizacao } from '../../model/geolocalizacao';

import { GeolocalizacaoConverter } from '../../converters/geolocalizacao-converter';

/*
  Generated class for the GoogleapiGeocodeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class GeocodeProvider {

    static API_KEY = "AIzaSyAGYPjbDQ42rYlwXxxrUoN4HN4DENv008Y";

    static URL_GOOGLE_GEOCODE_API = "https://maps.googleapis.com/maps/api/geocode/json?address=:address&key=:API_KEY";
    static URL_GOOGLE_REVERSE_GEOCODE_API = "https://maps.googleapis.com/maps/api/geocode/json?latlng=:latitude,:longitude&key=:API_KEY"

    static GOOGLE_GEOCODE_SUCCESS = "OK";

    static ERROS_STATUS_MENSAGENS = [
        {status: "ZERO_RESULTS", mensagem: "Endereço não encontrado."},
        {status: "OVER_QUERY_LIMIT", mensagem: "Cota de consulta ultrapassada."},
        {status: "REQUEST_DENIED", mensagem: "Solicitação negada."},
        {status: "INVALID_REQUEST", mensagem: "Solicitação inválida."},
        {status: "UNKNOWN_ERROR", mensagem: "Erro desconhecido."}
    ];

    constructor(public http: Http, public geolocalizacaoConverter: GeolocalizacaoConverter) {
        // console.log('Hello GoogleapisGeocodeProvider Provider');
    }

    getGeolocalizacao(endereco: Endereco): Observable<Geolocalizacao> {
        let address = endereco.logradouro + "+" + (endereco.numero ? endereco.numero + "+" : '') + endereco.bairro 
            + "+" + endereco.municipio + "+" + endereco.uf + "+" + endereco.cep;

        let url = GeocodeProvider.URL_GOOGLE_GEOCODE_API
            .replace(":API_KEY", GeocodeProvider.API_KEY)
            .replace(":address", address.replace(" ", "+"));

        return this.http.get(url)
            .map(response => {
                let body = response.json();
                if (body && body.status == GeocodeProvider.GOOGLE_GEOCODE_SUCCESS)
                    return body;
                else
                    return Observable.throw(this.mapError(body));
            })
            .map(body => {
                return this.geolocalizacaoConverter
                    .converterGeolocalizacao(+body.results[0].geometry.location.lat, +body.results[0].geometry.location.lng);
            });
    }

    getDescricaoEndereco(geolocalizacao: Geolocalizacao): Observable<string> {
        let url = GeocodeProvider.URL_GOOGLE_REVERSE_GEOCODE_API
            .replace(":API_KEY", GeocodeProvider.API_KEY)
            .replace(":latitude", geolocalizacao.latitude + "")
            .replace(":longitude", geolocalizacao.longitude + "");

        return this.http.get(url)
            .map(response => {
                let body = response.json();
                if (body && body.status == GeocodeProvider.GOOGLE_GEOCODE_SUCCESS)
                    return body;
                else
                    return Observable.throw(this.mapError(body));
            })
            .map(body => body.results[0].formatted_address);
    }

    private mapError(body) {
        if (body)
            GeocodeProvider.ERROS_STATUS_MENSAGENS.forEach(erro => {
                if (erro.status == body.status)
                    return erro;
            });
        return GeocodeProvider.ERROS_STATUS_MENSAGENS[4];
    }

}