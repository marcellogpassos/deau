import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MunicipioPadraoPage } from './municipio-padrao';
import { MunicipioPadraoProvider } from '../../providers/municipio-padrao/municipio-padrao';
import { MunicipioConverter } from '../../converters/municipio-converter';

@NgModule({
  declarations: [
    MunicipioPadraoPage,
  ],
  imports: [
    IonicPageModule.forChild(MunicipioPadraoPage),
  ],
  providers: [
    MunicipioPadraoProvider,
    MunicipioConverter
  ]
})
export class MunicipioPadraoPageModule {}
