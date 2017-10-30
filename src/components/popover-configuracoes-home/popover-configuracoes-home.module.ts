import { NgModule } from '@angular/core';
import { PopoverConfiguracoesHomeComponent } from './popover-configuracoes-home';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PopoverConfiguracoesHomeComponent,
  ],
  entryComponents: [
    PopoverConfiguracoesHomeComponent
  ],
  exports: [
    PopoverConfiguracoesHomeComponent
  ],
  imports: [
    IonicPageModule.forChild(PopoverConfiguracoesHomeComponent),
  ]
})
export class PopoverConfiguracoesHomeComponentModule {}