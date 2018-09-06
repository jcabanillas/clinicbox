import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PacienteConsultasPage} from './paciente-consultas';

@NgModule({
  declarations: [
    PacienteConsultasPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteConsultasPage),
  ],
})
export class PacienteConsultasPageModule {
}
