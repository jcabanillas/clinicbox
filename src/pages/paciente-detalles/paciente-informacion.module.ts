import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteInformacionPage } from './paciente-informacion';

@NgModule({
  declarations: [
    PacienteInformacionPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteInformacionPage),
  ],
})
export class PacienteDetallesPageModule {}
