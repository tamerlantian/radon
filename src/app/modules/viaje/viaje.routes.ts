import { Route } from '@angular/router';

const routes: Route[] = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/viaje-lista/viaje-lista.component'),
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

export default routes;
