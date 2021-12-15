import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppRestService {
  constructor(private http: HttpClient) {}


  getDataPersonajes() {
    return this.http.get('https://rickandmortyapi.com/api/character/');
  }


  getDataCapitulos() {
    return this.http.get('https://rickandmortyapi.com/api/episode/');
  }


  getUrlListadoPersonajes(url: string) {
    return this.http.get(url);
  }

  getFilterCapitulos(termino: string) {
    return this.http.get(
      `https://rickandmortyapi.com/api/character/?name=${termino}`
    );
  }


  getFilterPersonajes(termino: string) {
    return this.http.get(
      `https://rickandmortyapi.com/api/episode/?name=${termino}`
    );
  }
}
