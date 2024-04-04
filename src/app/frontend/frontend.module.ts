import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FrontendModuleRoutingModule } from './frontend-routing.module';
import { LastEventsComponent } from './components/last-events/last-events.component';
import { SliderHomeComponent } from './components/slider-home/slider-home.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailComponent } from './pages/detail/detail.component';
import { DateFromToComponent } from './date-from-to/date-from-to.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CardsSliderComponent } from './components/cards-slider/cards-slider.component';
import { EventsComponent } from './pages/events/events.component';
import { SingleCardEventComponent } from './components/single-card-event/single-card-event.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegisterComponent } from './pages/register/register.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { AccountComponent } from './pages/account/account.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { SimilarEventsComponent } from './components/similar-events/similar-events.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingComponent } from './components/loading/loading.component';
import { MapboxComponent } from './components/mapbox/mapbox.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    LastEventsComponent,
    SliderHomeComponent,
    HeaderComponent,
    BannerHomeComponent,
    FooterComponent,
    DetailComponent,
    DateFromToComponent,
    CategoriesComponent,
    CardsSliderComponent,
    EventsComponent,
    SingleCardEventComponent,
    ContactComponent,
    MenuComponent,
    RegisterComponent,
    FavoritesComponent,
    AccountComponent,
    AboutusComponent,
    SimilarEventsComponent,
    LoadingComponent,
    MapboxComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    FrontendModuleRoutingModule,
    NgxSpinnerModule.forRoot()
  ],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontendModule { }
