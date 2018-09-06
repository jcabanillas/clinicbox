import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoAgregarPage } from './evento-agregar';

@NgModule({
  declarations: [
    EventoAgregarPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoAgregarPage),
  ],
})
export class EventoAgregarPageModule {}
