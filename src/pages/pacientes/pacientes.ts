import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {Paciente} from '../../models/paciente';

import {ClinicboxPacientes} from '../../providers/clinicbox-pacientes/clinicbox-pacientes';
import {PacienteDetallesPage} from '../paciente-detalles/paciente-detalles';


/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pacientes',
  templateUrl: 'pacientes.html',
})
export class PacientesPage {
  // Con Pipes
  descending: boolean = false;
  order: number;
  column: string = 'nombre';
  // Con el provider
  searchTerm: string;
  data: any;
  pacientes: Paciente[];
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clinicboxPacientes: ClinicboxPacientes) {
    this.getPacientes();
  }

  // Create function for getting Pacientes data
  getPacientes() {
    this.clinicboxPacientes.load(this.page, this.searchTerm)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.pacientes = this.data.data;
          this.perPage = 10; // this.data.per_page;
          this.totalData = this.data.totalItems;
          this.totalPage = 10; // this.data.total_pages;
        },
        error => this.errorMessage = <any>error);
  }

  doInfinite(infiniteScroll) {
    this.page = this.page + 1;
    setTimeout(() => {
      this.clinicboxPacientes.load(this.page)
        .subscribe(
          res => {
            this.data = res;
            this.perPage = 10; // this.data.per_page;
            this.totalData = this.data.totalItems;
            this.totalPage = 10; // this.data.total_pages;
            for (let i = 0; i < this.data.data.length; i++) {
              this.pacientes.push(this.data.data[i]);
            }
          },
          error => this.errorMessage = <any>error);

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  goToDetalles(id: number) {
    this.navCtrl.push(PacienteDetallesPage, {id});
  }

  sort(){
    this.descending = !this.descending;
    this.order = this.descending ? 1 : -1;
  }

  /*
  goToAgregar() {
    this.navCtrl.push(EventoAgregarPage);
  }
  */

  ionViewDidLoad() {
    //
  }
/*
  setFilteredItems(){
    this.pacientes = this.clinicboxPacientes.load(this.page, this.searchTerm)
      .subscribe(
        res => {
          this.data = res;
          console.log(this.data);
          this.pacientes = this.data.data;
          this.perPage = 10; // this.data.per_page;
          this.totalData = this.data.totalItems;
          this.totalPage = 10; // this.data.total_pages;
        },
        error => this.errorMessage = <any>error);
  }
*/

}
