import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrativoComponent } from './sistema/administrativo/administrativo.component';
import { UsuarioComponent } from './sistema/administrativo/usuario/usuario.component';
import { ProdutosComponent } from './sistema/administrativo/produtos/produtos.component';



const APP_ROUTES: Routes = [
    { path: '', component: AdministrativoComponent },
    { path: 'sistema/administrativo/usuario', component: UsuarioComponent },
    { path: 'sistema/administrativo/produtos', component:  ProdutosComponent }
   // { path: 'sistema/administrativo/inicio', component: AdministrativoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
