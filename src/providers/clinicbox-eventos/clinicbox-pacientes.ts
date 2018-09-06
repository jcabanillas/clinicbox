import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Paciente} from '../../models/paciente';
import {Evento} from "../../models/evento";

@Injectable()
export class ClinicboxCatalogoPacientes {
  clinicboxApiUrl = 'http://api.stockit.local/clinicbox';
  data: any;

  constructor(public http: HttpClient) {
  }

  // Load all github users
  load(): Observable<Paciente[]> {
    // return this.http.get(`${this.clinicboxApiUrl}/clinicbox/evento/index?id_empresa=61`)
    return this.http.get(`${this.clinicboxApiUrl}/evento/pacientes?id_empresa=61`)
      .map(res => <Paciente[]>res);
  }

  getPacientes(page?: number, size?: number): Paciente[] {
    let pacientes = [];

    this.load().subscribe(res => {
      this.data = res;
      console.log(this.data);
      pacientes = this.data.data;
    });

    if (page && size) {
      pacientes = pacientes.slice((page - 1) * size, ((page - 1) * size) + size);
    }
    return pacientes;
  }

  getPacientesAsync(page?: number, size?: number, timeout = 1000): Observable<Paciente[]> {
    return new Observable<Paciente[]>(observer => {
      observer.next(this.getPacientes(page, size));
      observer.complete();
    }).pipe(delay(timeout));
  }

}
