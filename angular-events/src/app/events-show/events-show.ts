import { Component } from '@angular/core';
import { IEvent } from '../../interfaces/i-event';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-events-show',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './events-show.html',
  styleUrl: './events-show.css',
})
export class EventsShow {
  events: IEvent[] = [
    {
      title: 'Foto uno',
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
