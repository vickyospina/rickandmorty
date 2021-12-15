

export interface capitulosDTO{

    id: number;
    name: string,
    episode: string,
    characters: string[],
    url: string,
    personajes: personajesDTO[],
}


export interface personajesDTO{

    url: string,
    name: string
}


export interface personajes2DTO{

    id:number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: string,
    location: {
      name: string,
      url: string
    },
    image: string,
    episode: string[],
    url: string,
    capitulos: capitulos2DTO[];

}

export interface capitulos2DTO{

    url: string,
    name: string

}


