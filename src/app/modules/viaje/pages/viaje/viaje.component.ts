import { ChangeDetectionStrategy, Component, inject, signal, OnInit } from '@angular/core';
import { ViajeRepository } from '../../repositories/viaje.repository';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-viaje-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './viaje.component.html',
  styleUrl: './viaje.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViajeComponent implements OnInit {
  private _viajeRepository = inject(ViajeRepository);

  public viajes = signal<any[]>([]);

  ngOnInit(): void {
    this._viajeRepository.getViajes().subscribe(response => {
      this.viajes.set(response);
    });
  }
}
