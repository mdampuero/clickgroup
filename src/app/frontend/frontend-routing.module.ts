import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { DetailComponent } from './pages/detail/detail.component';
import { EventsComponent } from './pages/events/events.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RegisterComponent } from './pages/register/register.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AccountComponent } from './pages/account/account.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'eventos/:id', component: DetailComponent},
  { path: 'eventos', component: EventsComponent},
  { path: 'contacto', component: ContactComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: RegisterComponent},
  { path: 'favoritos', component: FavoritesComponent},
  { path: 'micuenta', component: AccountComponent},
  { path: 'sobrenosotros', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontendModuleRoutingModule { }
