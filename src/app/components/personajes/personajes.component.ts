import { Component, OnInit } from '@angular/core';
import { personajes2DTO, capitulos2DTO } from '../../appListados/app.listados';
import { Router } from '@angular/router';
import { AppRestService } from 'src/app/services/app-rest.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styles: [],
})
export class PersonajesComponent {
  listaPersonajes: personajes2DTO[] = [];

  constructor(private apiPersonajes: AppRestService, private router: Router) {
    this.apiPersonajes.getDataPersonajes().subscribe((dataPersonajes: any) => {
      this.listaPersonajes = dataPersonajes.results;
      this.setNameUrlPersonajes();
    });
  }

  setNameUrlPersonajes() {
    for (let i = 0; i < this.listaPersonajes.length; i++) {
      const dataNameCapitulos = this.listaPersonajes[i];
      let urlCapitulos = dataNameCapitulos.episode;
      dataNameCapitulos.capitulos = [];

      for (let j = 0; j < urlCapitulos.length; j++) {
        const urli = urlCapitulos[j];
        let capitulo = { url: urli, name: '' };
        this.apiPersonajes
          .getUrlListadoPersonajes(urli)
          .subscribe((result: any) => {
            capitulo.name = result.name;
          });
        dataNameCapitulos.capitulos.push(capitulo);
      }
    }
  }

  verCapitulos(item: personajes2DTO) {
    this.router.navigate(['/personaje', item.id]);
  }

  setUrlSearchPersonajes(termino: string) {
    this.apiPersonajes.getFilterCapitulos(termino).subscribe((data: any) => {
      this.listaPersonajes = data.results;
    });
  }
}
