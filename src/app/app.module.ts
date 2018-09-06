import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {EventosPage} from '../pages/eventos/eventos';
import {EventoDetallesPage} from '../pages/evento-detalles/evento-detalles';
import {EventoAgregarPage} from '../pages/evento-agregar/evento-agregar';
import {EventoEditarPage} from '../pages/evento-editar/evento-editar';
import {PacientesPage} from '../pages/pacientes/pacientes';
import {PacienteDetallesPage} from "../pages/paciente-detalles/paciente-detalles";
import {PacienteInformacionPage} from '../pages/paciente-detalles/paciente-informacion';
import {PacienteConsultasPage} from "../pages/paciente-detalles/paciente-consultas";
import {PacienteEventosPage} from "../pages/paciente-detalles/paciente-eventos";
import {CalendarioPage} from '../pages/calendario/calendario';
// Login
import {WelcomePage} from '../pages/welcome/welcome';
import {LoginPage} from '../pages/login/login';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {ClinicboxEventos} from '../providers/clinicbox-eventos/clinicbox-eventos';
import {ClinicboxTipos} from '../providers/clinicbox-eventos/clinicbox-tipos';
import {ClinicboxUbicaciones} from '../providers/clinicbox-eventos/clinicbox-ubicaciones';
import {ClinicboxCatalogoPacientes} from '../providers/clinicbox-eventos/clinicbox-pacientes';
import {ClinicboxResponsables} from '../providers/clinicbox-eventos/clinicbox-responsables';
import {ClinicboxPacientes} from '../providers/clinicbox-pacientes/clinicbox-pacientes';

// Login
import {AuthService} from '../providers/auth-service/auth-service';

import {SelectSearchableModule} from 'ionic-select-searchable';

import {MomentPipe} from '../pipes/moment/moment';

import {HttpClientModule, HttpClient} from '@angular/common/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CalendarModule, CalendarDateFormatter, CalendarEventTitleFormatter} from 'angular-calendar';

import {CalendarWeekHoursViewModule} from 'angular-calendar-week-hours-view';

import {CustomEventTitleFormatterProvider} from '../providers/custom-event-title-formatter/custom-event-title-formatter';
import {CustomDateFormatterProvider} from '../providers/custom-date-formatter/custom-date-formatter';

import localeEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';

import {SearchPipe} from '../pipes/search/search';
import {SortPipe} from '../pipes/sort/sort';


registerLocaleData(localeEs);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    EventosPage,
    EventoDetallesPage,
    EventoAgregarPage,
    EventoEditarPage,
    PacientesPage,
    PacienteDetallesPage,
    PacienteInformacionPage,
    PacienteConsultasPage,
    PacienteEventosPage,
    CalendarioPage,
    MomentPipe,
    // Login
    WelcomePage,
    LoginPage,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SelectSearchableModule,
    HttpClientModule,
    // CalendarModule,
    BrowserAnimationsModule,
    // NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    CalendarWeekHoursViewModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    EventosPage,
    EventoAgregarPage,
    EventoEditarPage,
    EventoDetallesPage,
    PacientesPage,
    PacienteDetallesPage,
    PacienteInformacionPage,
    PacienteConsultasPage,
    PacienteEventosPage,
    CalendarioPage,
    // Login
    WelcomePage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    ClinicboxEventos,
    ClinicboxTipos,
    ClinicboxUbicaciones,
    ClinicboxCatalogoPacientes,
    ClinicboxPacientes,
    ClinicboxResponsables,
    // { provide: LOCALE_ID, useValue: "es-ES" },
    CustomDateFormatterProvider,
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatterProvider
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatterProvider
    },
    AuthService
  ]
})
export class AppModule {
}
