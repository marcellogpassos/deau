import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import firebase from 'firebase';
import { MsgProvider } from '../msg/msg';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: Http, public msg: MsgProvider) {
    // console.log('Hello AuthProvider Provider');
  }

  getAuth(): firebase.auth.Auth {
    return firebase.auth();
  }

  getCurrentUser(): firebase.User {
    return firebase.auth().currentUser;
  }

  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }

  mapAuthError(error) {
    switch (error.code) {
      case "auth/invalid-email": return this.msg.getMsg(MsgProvider.ERRO, "msg001");
      case "auth/user-not-found": return this.msg.getMsg(MsgProvider.ERRO, "msg002");
      case "auth/wrong-password": return this.msg.getMsg(MsgProvider.ERRO, "msg003");
      default: return null;
    }
  }

}
