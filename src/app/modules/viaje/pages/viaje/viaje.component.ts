import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { ViajeRepository } from '../../repositories/viaje.repository';
import { RouterLink } from '@angular/router';
import { Viaje } from '../../interfaces/viaje.interface';
import { CommonModule } from '@angular/common';
import { AlertaService } from '@app/common/services/alerta.service';
import { ViajeCardComponent } from '../../components/viaje-card/viaje-card.component';

@Component({
  selector: 'app-viaje-lista',
  standalone: true,
  imports: [RouterLink, CommonModule, ViajeCardComponent],
  templateUrl: './viaje.component.html',
  styleUrl: './viaje.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViajeComponent implements OnInit {
  private _viajeRepository = inject(ViajeRepository);
  private _alertaService = inject(AlertaService);

  public viajes = signal<Viaje[]>([]);

  ngOnInit(): void {
    this.getVisitas();
  }

  getVisitas() {
    this._viajeRepository.getViajes().subscribe(response => {
      this.viajes.set(response.viajes);
    });
  }

  aceptarPropuesta(propuestaId: number): void {
    this._viajeRepository.aceptarPropuesta(propuestaId).subscribe(() => {
      this.getVisitas();
      this._alertaService.mostrarExito('Propuesta aceptada');
    });
  }

  eliminarViaje(viajeId: number): void {
    this._viajeRepository.eliminarViaje(viajeId).subscribe(() => {
      this.getVisitas();
      this._alertaService.mostrarExito('Viaje eliminado');
    });
  }

  cancelarViaje(viajeId: number): void {
    this._viajeRepository.cancelarViaje(viajeId).subscribe(() => {
      this.getVisitas();
      this._alertaService.mostrarExito('Viaje cancelado');
    });
  }
}
