import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComentariosDistribuidorPage } from './comentarios-distribuidor';
import { PipesModule } from '../../pipes/pipes.module';
import { ComentariosProvider } from '../../providers/comentarios/comentarios';
import { ComentarioConverter } from '../../converters/comentario-converter';

@NgModule({
  declarations: [
    ComentariosDistribuidorPage,
  ],
  imports: [
    IonicPageModule.forChild(ComentariosDistribuidorPage),
    PipesModule
  ],
  providers: [
    ComentariosProvider,
    ComentarioConverter
  ]
})
export class ComentariosDistribuidorPageModule {}
