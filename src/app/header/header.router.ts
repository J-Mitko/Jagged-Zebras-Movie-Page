import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectComponent } from '../select/select.component';

export const router: Routes = [
    { path: '', component: SelectComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
