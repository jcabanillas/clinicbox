import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Paciente} from "../../models/paciente";
import {Telefono} from "../../models/telefono";
import {Email} from "../../models/email";
import {ClinicboxPacientes} from "../../providers/clinicbox-pacientes/clinicbox-pacientes";
import {Platform} from 'ionic-angular';
import {PacienteInformacionPage} from "./paciente-informacion";
import {PacienteConsultasPage} from "./paciente-consultas";
import {PacienteEventosPage} from "./paciente-eventos";

/**
 * Generated class for the PacienteDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'paciente-detalles.html'
})
export class PacienteDetallesPage {
  id: number;
  rootPage = PacienteInformacionPage;
  consultasPage = PacienteConsultasPage;
  eventosPage = PacienteEventosPage;
  tabParams: any;
  isAndroid: boolean = false;


  constructor(platform: Platform, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
    this.id = navParams.get('id');
    this.tabParams = {id: this.id}
  }
}
