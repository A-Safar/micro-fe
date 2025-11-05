import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './Feature1Component'
      }).then(m => m.Feature1)
  },
  {
    path: 'mfe2',
    loadComponent: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './Feature2Component'
      }).then(m => m.Feature2)
  },
  {
    path: '',
    redirectTo: '/mfe1',
    pathMatch: 'full'
  }
];
