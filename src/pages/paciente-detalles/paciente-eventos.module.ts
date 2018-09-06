import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PacienteEventosPage} from './paciente-eventos';

@NgModule({
  declarations: [
    PacienteEventosPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteEventosPage),
  ],
})
export class PacienteEventosPageModule {
}
