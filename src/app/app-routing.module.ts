import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes,  } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule) },
  { path: 'admin', loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: 'reload'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
