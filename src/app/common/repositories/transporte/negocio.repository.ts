import { inject, Injectable } from '@angular/core';
import { HttpBaseRepository } from '@app/core/repository/http-base.repository';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NegocioRepository {
  private _httpBase = inject(HttpBaseRepository);
  private _apiSubdomain = environment.apiSubdomain;

  constructor() {}

  nuevoViaje(id: number, schemaName: string) {
    const url = this._apiSubdomain.replace('subdomain', schemaName);
    return this._httpBase.post<{ estado_aprobado: true }>(
      url + '/transporte/negocio/nuevo-viaje/',
      {
        viaje_id: id,
      }
    );
  }
}
