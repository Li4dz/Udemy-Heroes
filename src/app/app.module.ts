import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesService } from "./components/servicios/heroes.service";
// RUTAS

import { APP_ROUTING } from './app.routes';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

// SERVICIOS

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [ HeroesService ],
  bootstrap: [AppComponent],
})
export class AppModule { }
