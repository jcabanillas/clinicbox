import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {Evento} from '../../models/evento';

import {ClinicboxEventos} from '../../providers/clinicbox-eventos/clinicbox-eventos';

import {EventoAgregarPage} from '../evento-agregar/evento-agregar';
import {EventoDetallesPage} from '../evento-detalles/evento-detalles';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {
  data: any;
  eventos: Evento[];
  errorMessage: string;
  page = 1;
  perPage = 0;
  totalData = 0;
  totalPage = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private clinicboxEventos: ClinicboxEventos) {
    this.getEventos();
  }

  // Create function for getting Eventos data
  getEventos() {
    this.clinicboxEventos.load(this.page)
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
      this.clinicboxEventos.load(this.page)
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

  goToDetalles(id: number) {
    this.navCtrl.push(EventoDetallesPage, {id});
  }

  goToAgregar() {
    this.navCtrl.push(EventoAgregarPage);
  }

}
