import { inject, Injectable } from '@angular/core';
import { HttpBaseRepository } from '@app/core/repository/http-base.repository';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NegocioRepository {
  private _httpBase = inject(HttpBaseRepository);
  private _apiSubdomain = environment.apiSubdomain;
  private _isProduction = environment.production;
  private _apiDev = environment.apiDev;

  constructor() {}

  nuevoViaje(id: number, schemaName: string) {
    const url = this._isProduction
      ? this._apiSubdomain.replace('subdomain', schemaName)
      : this._apiDev;
    return this._httpBase.post<{ estado_aprobado: true }>(
      url + '/transporte/negocio/nuevo-viaje/',
      {
        viaje_id: id,
      }
    );
  }
}
