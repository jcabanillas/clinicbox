import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Paciente} from '../../models/paciente';
import {Telefono} from '../../models/telefono';
import {Email} from '../../models/email';
import {Consulta} from '../../models/consulta';
import {Evento} from '../../models/evento';

/*
  Generated class for the ClinicboxPacientesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClinicboxPacientes {

  clinicboxApiUrl = 'http://api.stockit.local/clinicbox';

  constructor(public http: HttpClient) {
    console.log('Hello ClinicboxPacientesProvider Provider');
  }

// Load all github users
  load(page, search?: string): Observable<Paciente[]> {
    if (search == undefined) {
      search = '';
    }
    return this.http.get(`${this.clinicboxApiUrl}/paciente/index?id_empresa=61&page=` + page + `&filter=` + search)
      .map(res => <Paciente[]>res);
  }

  loadDetails(id: number): Observable<Paciente> {
    return this.http.get(`${this.clinicboxApiUrl}/paciente/view?id=${id}`)
      .map(res => <Paciente>(res))
  }

  loadTelefonos(id:number): Observable<Telefono[]> {
    return this.http.get(`${this.clinicboxApiUrl}/paciente/telefonos?id=${id}`)
      .map(res => <Telefono[]>res);
  }

  loadEmails(id:number): Observable<Email[]> {
    return this.http.get(`${this.clinicboxApiUrl}/paciente/emails?id=${id}`)
      .map(res => <Email[]>res);
  }

  loadConsultas(id:number, page): Observable<Consulta[]> {
    return this.http.get(`${this.clinicboxApiUrl}/paciente/consultas?id=${id}&page=${page}`)
      .map(res => <Consulta[]>res);
  }

  loadEventos(id:number, page): Observable<Evento[]> {
    return this.http.get(`${this.clinicboxApiUrl}/paciente/eventos?id=${id}&page=${page}`)
      .map(res => <Evento[]>res);
  }

}
