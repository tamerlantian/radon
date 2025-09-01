import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-viaje-lista',
  standalone: true,
  imports: [],
  template: `<p>viaje-lista works!</p>`,
  styleUrl: './viaje-lista.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViajeListaComponent {}
