import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativoComponent } from './sistema/administrativo/administrativo.component';


const APP_ROUTES: Routes = [
    { path: '', component: AdministrativoComponent }
   // { path: 'sistema/administrativo/inicio', component: AdministrativoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);