import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventoEditarPage } from './evento-editar';

@NgModule({
  declarations: [
    EventoEditarPage,
  ],
  imports: [
    IonicPageModule.forChild(EventoEditarPage),
  ],
})
export class EventoEditarPageModule {}
