import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { EventosPage } from '../pages/eventos/eventos';
import { EventoDetallesPage } from '../pages/evento-detalles/evento-detalles';
import { EventoAgregarPage } from '../pages/evento-agregar/evento-agregar';
import { EventoEditarPage } from '../pages/evento-editar/evento-editar';
import { PacientesPage } from '../pages/pacientes/pacientes';
import { PacienteDetallesPage } from '../pages/paciente-detalles/paciente-detalles';
import { PacienteInformacionPage } from '../pages/paciente-detalles/paciente-informacion';
import { PacienteConsultasPage } from '../pages/paciente-detalles/paciente-consultas';
import { PacienteEventosPage } from '../pages/paciente-detalles/paciente-eventos';
import { CalendarioPage } from '../pages/calendario/calendario';
// Login
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = PacientesPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      {title: 'Eventos', component: EventosPage},
      {title: 'EventoDetalles', component: EventoDetallesPage},
      {title: 'EventoAgregar', component: EventoAgregarPage},
      {title: 'EventoEditar', component: EventoEditarPage},
      {title: 'Pacientes', component: PacientesPage},
      {title: 'PacienteDetalles', component: PacienteDetallesPage},
      {title: 'PacienteInformacion', component: PacienteInformacionPage},
      {title: 'PacienteConsultas', component: PacienteConsultasPage},
      {title: 'PacienteEventos', component: PacienteEventosPage},
      {title: 'Calendario', component: CalendarioPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
