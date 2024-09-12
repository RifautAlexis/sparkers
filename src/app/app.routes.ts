import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/partner-list/partner-list.component').then((m) => m.PartnerListComponent),
    }
];
