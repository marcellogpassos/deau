import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgressBarComponent } from './progress-bar';

@NgModule({
  declarations: [
    ProgressBarComponent,
  ],
  entryComponents: [
    ProgressBarComponent
  ],
  exports: [
    ProgressBarComponent
  ],
  imports: [
    IonicPageModule.forChild(ProgressBarComponent),
  ]
})
export class ProgressBarComponentModule {}