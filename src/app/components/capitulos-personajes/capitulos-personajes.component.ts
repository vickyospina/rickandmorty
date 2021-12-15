import { Component } from '@angular/core';
import { personajes2DTO, capitulos2DTO } from '../../appListados/app.listados';
import { ActivatedRoute } from '@angular/router';
import { AppRestService } from 'src/app/services/app-rest.service';

@Component({
  selector: 'app-capitulos-personajes',
  templateUrl: './capitulos-personajes.component.html',
  styles: [],
})
export class CapitulosPersonajesComponent {
  personaje: personajes2DTO;
  url: string;
  capituloss: capitulos2DTO[];

  constructor(
    private router: ActivatedRoute,
    private appiCapitulos: AppRestService
  ) {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this.setUrl(id);
    });
    this.getPersonaje();
  }

  getPersonaje() {
    this.appiCapitulos
      .getUrlListadoPersonajes(this.url)
      .subscribe((result: any) => {
        this.personaje = result;
        this.setNameUrlPersonajes();
      });
  }

  setNameUrlPersonajes() {
    let urlCapitulos = this.personaje.episode;
    this.personaje.capitulos = [];

    for (let j = 0; j < urlCapitulos.length; j++) {
      const urli = urlCapitulos[j];
      let capitulo = { url: urli, name: '' };

      this.appiCapitulos
        .getUrlListadoPersonajes(urli)
        .subscribe((result: any) => {
          capitulo.name = result.name;
        });
      this.personaje.capitulos.push(capitulo);
    }
    this.capituloss = this.personaje.capitulos;
  }

  setUrl(id: string) {
    this.url = ` https://rickandmortyapi.com/api/character/${id}`;
  }
}
