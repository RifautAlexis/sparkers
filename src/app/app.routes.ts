import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home.component').then((m) => m.HomeComponent),
    },
    {
        path: 'partners',
        loadComponent: () => import('./features/partner-list/partner-list.component').then((m) => m.PartnerListComponent),
    }
];
