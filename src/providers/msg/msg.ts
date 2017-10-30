import { Injectable } from '@angular/core';

/*
  Generated class for the MsgProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MsgProvider {

  static CONF: string = "confirmation";
  static ERRO: string = "error";
  static INFO: string = "info";
  static LABE: string = "label";
  static LOAD: string = "loading";
  static SUCC: string = "success";
  static WARN: string = "warning";

  constructor() {

  }

  public getMsg(tipo: string, codigo: string, params?: any[]): string {
    let msg = this.messages[tipo][codigo];
    if (msg && params) 
      for(let i = 0; i < params.length; i++)
        msg = msg.replace("{" + i + "}", params[i] + "");
    return msg;
  }

  private messages: any = {
    confirmation: {
      msg001: "",
      msg002: "",
      msg003: "",
      msg004: "",
      msg005: "",
    },
    error: {
      msg001: "",
      msg002: "",
      msg003: "",
      msg004: "",
      msg005: "",
    },
    info: {
      msg001: "",
      msg002: "",
      msg003: "",
      msg004: "",
      msg005: "",
    },
    label: {
      msg001: "Confirmar",
      msg002: "Cancelar",
      msg003: "",
      msg004: "",
      msg005: "",
    },
    loading: {
      msg001: "",
      msg002: "",
      msg003: "",
      msg004: "",
      msg005: "",
    },
    success: {
      msg001: "",
      msg002: "",
      msg003: "",
      msg004: "",
      msg005: "",
    },
    warning: {
      msg001: "",
      msg002: "",
      msg003: "",
      msg004: "",
      msg005: "",
    }
  };

}
