import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Ubicacion} from '../../models/ubicacion';

@Injectable()
export class ClinicboxUbicaciones {
  clinicboxApiUrl = 'http://api.stockit.local/clinicbox';

  constructor(public http: HttpClient) {
  }

  // Load all github users
  load(): Observable<Ubicacion[]> {
    // return this.http.get(`${this.clinicboxApiUrl}/clinicbox/evento/index?id_empresa=61`)
    return this.http.get(`${this.clinicboxApiUrl}/evento/ubicaciones?id_empresa=61`)
      .map(res => <Ubicacion[]>res);
    // .map(this.extractData);
  }
}
