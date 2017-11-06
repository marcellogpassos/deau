import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AuthProvider } from '../providers/auth/auth';
import { MsgProvider } from '../providers/msg/msg';
import { ComentariosProvider } from '../providers/comentarios/comentarios';
import { MunicipioPadraoProvider } from '../providers/municipio-padrao/municipio-padrao';
import { MunicipioConverter } from '../converters/municipio-converter';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'deau_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    MsgProvider,
    Storage,
    ComentariosProvider,
    MunicipioPadraoProvider,
    MunicipioConverter,    
  ]
})
export class AppModule {}
