import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Tipo} from '../../models/tipo';

@Injectable()
export class ClinicboxTipos {
  clinicboxApiUrl = 'http://api.stockit.local/clinicbox';

  constructor(public http: HttpClient) {
  }

  // Load all github users
  load(): Observable<Tipo[]> {
    // return this.http.get(`${this.clinicboxApiUrl}/clinicbox/evento/index?id_empresa=61`)
    return this.http.get(`${this.clinicboxApiUrl}/evento/tipos?id_empresa=61`)
      .map(res => <Tipo[]>res);
    // .map(this.extractData);
  }

}
