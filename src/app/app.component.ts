import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import firebase from 'firebase';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "HomePage";
  usuarioAutenticado: boolean;

  pages: Array<{code: number, icon: string, title: string, component: any, auth: boolean, guest: boolean}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
    public authProvider: AuthProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { code: 1, icon: "home", title: 'Início', component: "HomePage", auth: true, guest: true },
      { code: 2, icon: "list-box", title: 'Meus pedidos', component: "", auth: true, guest: false },
      { code: 3, icon: "bookmark", title: 'Favoritos', component: "", auth: true, guest: false },
      { code: 4, icon: "person", title: 'Seus dados', component: "", auth: true, guest: false },
      { code: 5, icon: "settings", title: 'Configurações', component: "", auth: true, guest: true },
      { code: 6, icon: "log-in", title: 'Entrar', component: "", auth: false, guest: true },
      { code: 7, icon: "person-add", title: 'Cadastre-se', component: "", auth: false, guest: true },
      { code: 0, icon: "log-out", title: 'Sair', component: "", auth: true, guest: false  },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.initFirebaseApp();
      this.checkAuthentication();

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkAuthentication() {
    this.authProvider.getAuth()
      .onAuthStateChanged(user => {
        this.usuarioAutenticado = (user != null);
      });
  }

  initFirebaseApp() {
    firebase.initializeApp({
      apiKey: "AIzaSyCwFOKH0393ngVWAUMByv5lZKBd1jtoyiM",
      authDomain: "deau-8e28f.firebaseapp.com",
      databaseURL: "https://deau-8e28f.firebaseio.com",
      projectId: "deau-8e28f",
      storageBucket: "deau-8e28f.appspot.com",
      messagingSenderId: "1028891332988",
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  getPages() {
    return this.pages.filter(page => (page.auth && this.usuarioAutenticado) || (page.guest && !this.usuarioAutenticado))
  }

}
