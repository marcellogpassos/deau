import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistribuidorPage } from './distribuidor';
import { DistribuidoresProvider } from '../../providers/distribuidores/distribuidores';
import { DistribuidorConverter } from '../../converters/distribuidor-converter';
import { EnderecosConverter } from '../../converters/enderecos-converter';
import { AvaliacoesDistribuidorConverter } from '../../converters/avaliacoes-distribuidor-converter';
import { PipesModule } from '../../pipes/pipes.module';
import { ProgressBarComponentModule } from '../../components/progress-bar/progress-bar.module';

@NgModule({
  declarations: [
    DistribuidorPage,
  ],
  providers: [
    AvaliacoesDistribuidorConverter,
    DistribuidorConverter,
    EnderecosConverter,
    DistribuidoresProvider,
  ],
  imports: [
    IonicPageModule.forChild(DistribuidorPage),
    PipesModule,
    ProgressBarComponentModule,
  ],
})
export class DistribuidorPageModule {}
