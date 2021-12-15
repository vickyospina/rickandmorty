  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';
  import { AppComponent } from './app.component';
  import { PersonajesComponent } from './components/personajes/personajes.component';
  import { CapitulosComponent } from './components/capitulos/capitulos.component';
  import { NavbarComponent } from './components/navbar/navbar.component';
  import { CapitulosPersonajesComponent } from './components/capitulos-personajes/capitulos-personajes.component';


  import { ROUTES } from './app.routers';

  @NgModule({
    declarations: [
      AppComponent,
      PersonajesComponent,
      CapitulosComponent,
      NavbarComponent,
      CapitulosPersonajesComponent,
    ],
    imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(ROUTES)],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule {}
