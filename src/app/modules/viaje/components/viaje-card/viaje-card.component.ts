import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Viaje } from '../../interfaces/viaje.interface';
import { EstadoBadgeComponent } from '@tamerlantian/ui-components';

@Component({
  selector: 'app-viaje-card',
  standalone: true,
  imports: [DatePipe, DecimalPipe, RouterLink, EstadoBadgeComponent],
  templateUrl: './viaje-card.component.html',
  styleUrl: './viaje-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViajeCardComponent {
  @Input() viaje!: Viaje;
  @Output() propuestaAceptada = new EventEmitter<number>();
  @Output() eliminarViaje = new EventEmitter<number>();
  @Output() cancelarViaje = new EventEmitter<number>();

  aceptarPropuesta(propuestaId: number): void {
    this.propuestaAceptada.emit(propuestaId);
  }

  eliminar(viajeId: number): void {
    this.eliminarViaje.emit(viajeId);
  }

  cancelar(viajeId: number): void {
    this.cancelarViaje.emit(viajeId);
  }
}
