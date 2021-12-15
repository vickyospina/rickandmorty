import { Component } from '@angular/core';
import { AppRestService } from 'src/app/services/app-rest.service';
import {
  capitulosDTO,
  personajesDTO,
} from '../../appListados/app.listados';
import { Router } from '@angular/router';


@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styles: [],
})
export class CapitulosComponent {
  listaCapitulos: capitulosDTO[] = [];
  url: string;

  constructor(private appiCapitulos: AppRestService, private router: Router) {
    this.appiCapitulos.getDataCapitulos().subscribe((dataCapitulos: any) => {
      this.listaCapitulos = dataCapitulos.results;
      this.setNameUrlPersonajes();
    });
  }

  setNameUrlPersonajes() {
    for (let i = 0; i < this.listaCapitulos.length; i++) {
      const dataNamePersonajes = this.listaCapitulos[i];
      let urlPersonajes = dataNamePersonajes.characters;
      dataNamePersonajes.personajes = [];

      for (let j = 0; j < urlPersonajes.length; j++) {
        const urli = urlPersonajes[j];
        let personaje = { url: urli, name: '' };

        this.appiCapitulos
          .getUrlListadoPersonajes(urli)
          .subscribe((result: any) => {
            personaje.name = result.name;
          });
        dataNamePersonajes.personajes.push(personaje);
      }
    }
  }

  setUrlSearchCapitulos(termino: string) {
    this.appiCapitulos.getFilterPersonajes(termino).subscribe((data: any) => {
      this.listaCapitulos = data.results;
      this.setNameUrlPersonajes();
    });
  }

  verCapitulos(item: personajesDTO) {
    let url = item.url;
    this.router.navigate(['/personaje', url.split('/')[5]]);
  }
}
