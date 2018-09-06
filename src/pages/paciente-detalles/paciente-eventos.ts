import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Paciente} from "../../models/paciente";
import {Evento} from "../../models/evento";
import {ClinicboxPacientes} from "../../providers/clinicbox-pacientes/clinicbox-pacientes";
import {Platform} from 'ionic-angular';

/**
 * Generated class for the PacienteConsultasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-paciente-eventos',
  templateUrl: 'paciente-eventos.html',
})
export class PacienteEventosPage {
  isAndroid: boolean = false;
  paciente: Paciente = {} as Paciente;
  eventos: Evento[];
  id: number;
  data: any;
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams, private clinicboxPacientes: ClinicboxPacientes) {
    this.isAndroid = platform.is('android');
    this.id = navParams.get('id');
    clinicboxPacientes.loadDetails(this.id).subscribe(res => {
      this.data = res;
      // console.log(this.data);
      this.paciente = this.data.data;
    });
    this.getEventos();

  }

  getEventos() {
    this.clinicboxPacientes.loadEventos(this.id, this.page) // , this.searchTerm)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.eventos = this.data.data;
          this.perPage = 10; // this.data.per_page;
          this.totalData = this.data.totalItems;
          this.totalPage = 10; // this.data.total_pages;
        },
        error => this.errorMessage = <any>error);
  }

  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    setTimeout(() => {
      this.clinicboxPacientes.loadEventos(this.id, this.page)
        .subscribe(
          res => {
            this.data = res;
            this.perPage = 10; // this.data.per_page;
            this.totalData = this.data.totalItems;
            this.totalPage = 10; // this.data.total_pages;
            for (let i = 0; i < this.data.data.length; i++) {
              this.eventos.push(this.data.data[i]);
            }
          },
          error => this.errorMessage = <any>error);
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  /*
  goToDetalles(id: number) {
    this.navCtrl.push(PacienteConsultaDetalles, {id});
  }
  */
}
