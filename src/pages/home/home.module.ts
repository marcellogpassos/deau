import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { PopoverConfiguracoesHomeComponentModule } from '../../components/popover-configuracoes-home/popover-configuracoes-home.module';

import { HomePage } from './home';

import { DistribuidoresProvider } from '../../providers/distribuidores/distribuidores';
import { EnderecosProvider } from '../../providers/enderecos/enderecos';
import { GeolocalizacaoProvider } from '../../providers/geolocalizacao/geolocalizacao';
import { UsuariosProvider } from "../../providers/usuarios/usuarios";

import { AvaliacoesDistribuidorConverter } from '../../converters/avaliacoes-distribuidor-converter';
import { DistribuidorConverter } from '../../converters/distribuidor-converter';
import { EnderecosConverter } from '../../converters/enderecos-converter';
import { GeolocalizacaoConverter } from '../../converters/geolocalizacao-converter';
import { GeocodeProvider } from '../../providers/geocode/geocode';
import { ProgressBarComponent } from '../../components/progress-bar/progress-bar';
import { ProgressBarComponentModule } from '../../components/progress-bar/progress-bar.module';


@NgModule({
  declarations: [
    HomePage,
  ],
  providers: [
    AvaliacoesDistribuidorConverter,
    DistribuidorConverter,
    EnderecosConverter,
    GeocodeProvider,
    Geolocation,
    GeolocalizacaoConverter,
    DistribuidoresProvider,
    EnderecosProvider,
    GeolocalizacaoProvider,
    UsuariosProvider,
  ],
  entryComponents: [
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    PopoverConfiguracoesHomeComponentModule,
    ProgressBarComponentModule
  ],
})
export class HomePageModule {}
