import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {Evento} from '../../models/evento';
import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';

/*
  Generated class for the ClinicboxEventos provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClinicboxEventos {

  clinicboxApiUrl = 'http://api.stockit.local/clinicbox';

  constructor(public http: HttpClient) {
    console.log('Hello ClinicboxEventosProvider Provider');
  }

  // Load all github users
  load(page): Observable<Evento[]> {
    return this.http.get(`${this.clinicboxApiUrl}/evento/index?id_empresa=61&page=` + page)
      .map(res => <Evento[]>res);
  }

  calendar(start, end): Observable<CalendarEvent[]> {
    let url = `${this.clinicboxApiUrl}/evento/calendar?id_empresa=61&start=` + start + `&end=` + end;
    // console.log(url);
    return this.http.get(url)
      .map(res => <CalendarEvent[]>res);
  }

  loadDetails(id: number): Observable<Evento> {
    return this.http.get(`${this.clinicboxApiUrl}/evento/view?id=${id}`)
      .map(res => <Evento>(res))
  }

  createEvento(data) {
    // return this.http.post(this.url, postParams, options).do( res =&gt; console.log(res));
    return new Promise((resolve, reject) => {
      this.http.post(`${this.clinicboxApiUrl}/evento/crear`, JSON.stringify(data),
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Accept': 'application/json',
            'content-type': 'application/json'
          }
        })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateEvento(id:number, data) {
    // return this.http.post(this.url, postParams, options).do( res =&gt; console.log(res));
    return new Promise((resolve, reject) => {
      this.http.post(`${this.clinicboxApiUrl}/evento/editar?id=${id}`, JSON.stringify(data),
        {
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
            'Accept': 'application/json',
            'content-type': 'application/json'
          }
        })
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }


}
