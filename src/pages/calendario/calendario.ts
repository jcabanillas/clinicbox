import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Subject} from 'rxjs/Subject';
import {AlertController} from 'ionic-angular/components/alert/alert-controller';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {
  CalendarEvent,
  CalendarMonthViewDay,
  CalendarViewPeriod,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import {ClinicboxEventos} from '../../providers/clinicbox-eventos/clinicbox-eventos';
import {Evento} from "../../models/evento";
import {EventoDetallesPage} from "../evento-detalles/evento-detalles";

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calendario',
  templateUrl: 'calendario.html',
})
export class CalendarioPage {
  viewDate: Date = new Date();
  view = 'week';
  locale: string = 'es';
  isDragging = false;
  refresh: Subject<any> = new Subject();
  data: any;
  errorMessage: string;
  events: CalendarEvent[];
  selectedDayViewDate: Date;

  formattedDate(fecha: Date) {
    var mm = fecha.getMonth() + 1; // getMonth() is zero-based
    var dd = fecha.getDate();

    return [fecha.getFullYear(),
      (mm > 9 ? '' : '0') + mm,
      (dd > 9 ? '' : '0') + dd
    ].join('-');
  };

  beforeViewRender({period}: { period: CalendarViewPeriod }): void {
    /*
    body.forEach(day => {
      if (day.date.getDate() % 2 === 1 && day.inMonth) {
        day.cssClass = 'odd-cell';
      }
    });
    */
    // console.log(period.start);
    // console.log(period.end);
    this.getEventos(this.formattedDate(period.start), this.formattedDate(period.end));
    // console.log(period);
  }

  /*
  CalendarEvent[] = [
    {
      start: addHours(startOfDay(new Date()), 7),
      end: addHours(startOfDay(new Date()), 9),
      title: 'First Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: addHours(startOfDay(new Date()), 10),
      end: addHours(startOfDay(new Date()), 12),
      title: 'Second Event',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];
  */
  constructor(public navCtrl: NavController, public navParams: NavParams, private clinicboxEventos: ClinicboxEventos) {
  }

  dayClicked(date): void {
    console.log(date);
  }

  handleEvent({event}: { event: CalendarEvent }): void {
    // console.log('Event clicked', event);
    /*
    let alert = this.alertCtrl.create({
      title: event.title,
      message: event.start + ' to ' + event.end,
      buttons: ['OK']
    });
    alert.present();
    */
    this.goToDetalles(event.id);
  }

  eventTimesChanged({event, newStart, newEnd}: CalendarEventTimesChangedEvent): void {
    if (this.isDragging) {
      return;
    }
    this.isDragging = true;

    event.start = newStart;
    event.end = newEnd;
    this.refresh.next();

    setTimeout(() => {
      this.isDragging = false;
    }, 1000);
  }

  hourSegmentClicked(date: Date) {
    // this.selectedDayViewDate = date;
    this.viewDate = date;
    // this.addSelectedDayViewClass();
    console.log(this.viewDate);
  }

  /*
  hourSegmentClicked(event): void {
    let newEvent: CalendarEvent = {
      start: event.date,
      end: addHours(event.date, 1),
      title: 'TEST EVENT',
      cssClass: 'custom-event',
      color: {
        primary: '#488aff',
        secondary: '#bbd0f5'
      },
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }

    this.events.push(newEvent);
    this.refresh.next();
  }
  */

  getEventos(start: String, end: String) {
    this.clinicboxEventos.calendar(start, end)
      .subscribe(
        res => {
          this.data = res;
          // console.log(this.data);
          this.events = this.data.data;
          this.events.forEach(event => {
            event.start = new Date(event.start);
            event.end = new Date(event.end);
          });
          // console.log(this.events);
        },
        error => this.errorMessage = <any>error);
  }

  goToDetalles(id: number | string) {
    this.navCtrl.push(EventoDetallesPage, {id});
  }

  goToAgregar(fecha: Date) {
    console.log("Fecha: " + fecha);
  }

}
