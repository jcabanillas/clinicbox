import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Paciente} from "../../models/paciente";
import {Telefono} from "../../models/telefono";
import {Email} from "../../models/email";
import {ClinicboxPacientes} from "../../providers/clinicbox-pacientes/clinicbox-pacientes";
import {Platform} from 'ionic-angular';

/**
 * Generated class for the PacienteDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente-detalles',
  templateUrl: 'paciente-informacion.html',
})
export class PacienteInformacionPage {
  isAndroid: boolean = false;
  paciente: Paciente = {} as Paciente;
  telefonos: Telefono[];
  emails: Email[];
  id: number;
  data: any;
  tiene_fecha_nacimiento: boolean = false;
  tiene_lugar_nacimiento: boolean = false;
  tiene_doctor_referencia: boolean = false;
  tiene_aseguradora: boolean = false;
  tiene_tipo_sangre: boolean = false;
  tiene_descripcion: boolean = false;
  // tab1: any;
  // tab2: any;
  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams, clinicboxPacientes: ClinicboxPacientes) {
    this.isAndroid = platform.is('android');
    this.id = navParams.get('id');
    clinicboxPacientes.loadDetails(this.id).subscribe(res => {
      this.data = res;
      // console.log(this.data);
      this.paciente = this.data.data;
      if (this.paciente.fecha_nacimiento) {
        this.tiene_fecha_nacimiento = true;
      }
      if (this.paciente.lugar_nacimiento) {
        this.tiene_lugar_nacimiento = true;
      }
      if (this.paciente.doctor_referencia) {
        this.tiene_doctor_referencia = true;
      }
      if (this.paciente.aseguradora) {
        this.tiene_aseguradora = true;
      }
      if (this.paciente.tipo_sangre) {
        this.tiene_tipo_sangre = true;
      }
      if (this.paciente.descripcion) {
        this.tiene_descripcion = true;
      }
    });
    clinicboxPacientes.loadTelefonos(this.id).subscribe(res => {
      this.data = res;
      // console.log(this.data);
      this.telefonos = this.data.data;
    });
    clinicboxPacientes.loadEmails(this.id).subscribe(res => {
      this.data = res;
      // console.log(this.data);
      this.emails = this.data.data;
    });
  }
}
