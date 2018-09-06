import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Responsable} from '../../models/responsable';

@Injectable()
export class ClinicboxResponsables {
  clinicboxApiUrl = 'http://api.stockit.local/clinicbox';

  constructor(public http: HttpClient) {
  }

  // Load all github users
  load(): Observable<Responsable[]> {
    return this.http.get(`${this.clinicboxApiUrl}/evento/responsables?id_empresa=61`)
      .map(res => <Responsable[]>res);
  }

}
