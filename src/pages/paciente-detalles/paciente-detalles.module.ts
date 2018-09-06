import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacienteDetallesPage } from './paciente-detalles';

@NgModule({
  declarations: [
    PacienteDetallesPage,
  ],
  imports: [
    IonicPageModule.forChild(PacienteDetallesPage),
  ],
})
export class PacienteDetallesPageModule {}
