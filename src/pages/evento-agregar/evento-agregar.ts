import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Paciente} from "../../models/paciente";
import {Tipo} from "../../models/tipo";
import {Ubicacion} from "../../models/ubicacion";
import {Responsable} from "../../models/responsable";
import {Subscription} from "rxjs";
import {Evento} from "../../models/evento";
import {ClinicboxEventos} from "../../providers/clinicbox-eventos/clinicbox-eventos";
import {ClinicboxCatalogoPacientes} from "../../providers/clinicbox-eventos/clinicbox-pacientes";
import {ClinicboxTipos} from "../../providers/clinicbox-eventos/clinicbox-tipos";
import {ClinicboxUbicaciones} from "../../providers/clinicbox-eventos/clinicbox-ubicaciones";
import {ClinicboxResponsables} from "../../providers/clinicbox-eventos/clinicbox-responsables";
import {SelectSearchableComponent} from "ionic-select-searchable";
import {EventoDetallesPage} from "../evento-detalles/evento-detalles";

/**
 * Generated class for the EventoAgregarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evento-agregar',
  templateUrl: 'evento-agregar.html',
})
export class EventoAgregarPage {
  evento: Evento = {} as Evento;
  pacientes: Paciente[];
  tipos: Tipo[];
  ubicaciones: Ubicacion[];
  responsables: Responsable[];
  id: number;
  data: any;
  data_pacientes: any;
  data_tipos: any;
  data_ubicaciones: any;
  data_responsables: any;
  paciente: Paciente;
  pacientesSubscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private clinicboxEventos: ClinicboxEventos,
    private clinicboxCatalogoPacientes: ClinicboxCatalogoPacientes,
    private clinicboxTipos: ClinicboxTipos,
    private clinicboxUbicaciones: ClinicboxUbicaciones,
    private clinicboxResponsables: ClinicboxResponsables,
  ) {
    clinicboxCatalogoPacientes.load().subscribe(res => {
      this.data_pacientes = res;
      console.log(this.data_pacientes);
      this.pacientes = this.data_pacientes.data;
      this.paciente = this.pacientes[this.evento.id_cuenta];
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

  pacienteChange(event: {
    component: SelectSearchableComponent,
    value: any
  }) {
    console.log('paciente:', event.value);
  }

  filterPacientes(pacientes: Paciente[], text: string) {
    return pacientes.filter(paciente => {
      return paciente.nombre.toLowerCase().indexOf(text) !== -1 ||
        paciente.id.toString().toLowerCase().indexOf(text) !== -1;
    });
  }

  searchPacientes(event: {
    component: SelectSearchableComponent,
    text: string
  }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();

    // Close any running subscription.
    if (this.pacientesSubscription) {
      this.pacientesSubscription.unsubscribe();
    }

    if (!text) {
      // Close any running subscription.
      if (this.pacientesSubscription) {
        this.pacientesSubscription.unsubscribe();
      }

      event.component.items = [];
      event.component.endSearch();
      return;
    }

    this.pacientesSubscription = this.clinicboxCatalogoPacientes.getPacientesAsync().subscribe(pacientes => {
      // Subscription will be closed when unsubscribed manually.
      if (this.pacientesSubscription.closed) {
        return;
      }

      event.component.items = this.filterPacientes(pacientes, text);
      event.component.endSearch();
    });
  }

  saveEvento() {
    /*
    this.clinicboxEventos.createEvento(this.evento).then((result) => {
      console.log(result);
      let id = result.data.id;
      this.navCtrl.push(EventoDetallesPage, {id});
    }, (err) => {
      console.log(err);
    });
    */
  }

}
