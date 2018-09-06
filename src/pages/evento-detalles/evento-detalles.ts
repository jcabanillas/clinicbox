import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Evento} from '../../models/evento';
import {Tipo} from '../../models/tipo';
import {Ubicacion} from '../../models/ubicacion';
import {Responsable} from '../../models/responsable';
import {ClinicboxEventos} from '../../providers/clinicbox-eventos/clinicbox-eventos';
import {ClinicboxTipos} from '../../providers/clinicbox-eventos/clinicbox-tipos';
import {ClinicboxUbicaciones} from '../../providers/clinicbox-eventos/clinicbox-ubicaciones';
import {ClinicboxResponsables} from '../../providers/clinicbox-eventos/clinicbox-responsables';
import {EventoEditarPage} from '../evento-editar/evento-editar';

/**
 * Generated class for the EventoDetallesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento-detalles',
  templateUrl: 'evento-detalles.html',
})
export class EventoDetallesPage {
  evento: Evento = {} as Evento;
  tipos: Tipo[];
  ubicaciones: Ubicacion[];
  responsables: Responsable[];
  id: number;
  data: any;
  data_tipos: any;
  data_ubicaciones: any;
  data_responsables: any;
  tiene_ubicacion: boolean = false;
  tiene_descripcion: boolean = false;
  tiene_consulta: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, clinicboxEventos: ClinicboxEventos,
              private clinicboxTipos: ClinicboxTipos,
              private clinicboxUbicaciones: ClinicboxUbicaciones,
              private clinicboxResponsables: ClinicboxResponsables,
  ) {
    this.id = navParams.get('id');
    clinicboxEventos.loadDetails(this.id).subscribe(res => {
      this.data = res;
      // console.log(this.data);
      this.evento = this.data.data;
      if (this.evento.ubicacion) {
        this.tiene_ubicacion = true;
      }
      if (this.evento.descripcion) {
        this.tiene_descripcion = true;
      }
      if (this.evento.ultima_consulta_texto) {
        this.tiene_consulta = true;
      }
    });
    clinicboxTipos.load().subscribe(res => {
      this.data_tipos = res;
      console.log(this.data_tipos);
      this.tipos = this.data_tipos.data;
    });
    clinicboxUbicaciones.load().subscribe(res => {
      this.data_ubicaciones = res;
      console.log(this.data_ubicaciones);
      this.ubicaciones = this.data_ubicaciones.data;
    });
    clinicboxResponsables.load().subscribe(res => {
      this.data_responsables = res;
      console.log(this.data_responsables);
      this.responsables = this.data_responsables.data;
    });
  }

  goToEditar(id: number) {
    this.navCtrl.push(EventoEditarPage, {id});
  }
}
