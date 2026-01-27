import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: '[incident-item]',
  imports: [],
  templateUrl: './incident-item.html',
  styleUrl: './incident-item.css',
})
export class IncidentItem {
  @Input() incidencia: any;
  @Output() cambio = new EventEmitter<string>();
  var = true;
  cambioEstado() {
    //Solucion:
    /* this.cambio.emit('Resuelta'); */

    this.cambio.emit(this.var ? 'res' : 'ocu');
    this.var = !this.var;
    
  }
}
