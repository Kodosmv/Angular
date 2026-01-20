import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventFilterPipe } from '../pipes/event-filter-pipe';

@Component({
  selector: 'app-events-show',
  imports: [CurrencyPipe, DatePipe, TitleCasePipe, FormsModule, EventFilterPipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  orderPrice() {
   /* this.events = this.events.sort(a, b){
      if(a.price>b.price){
        return 1;
      }
    } );
     */
  }
  orderDate() {
    throw new Error('Method not implemented.');
  }
  search = '';
  events: IEvent[] = [
    {
      title: 'foto uno',
      image: 'img1.jpg',
      date: '2004-05-08',
      description: 'noseque',
      price: 21,
    },
    {
      title: 'Prueba dos',
      image: 'img2.jpg',
      date: '2009-05-08',
      description: 'siiii',
      price: 55,
    },
  ];
}
