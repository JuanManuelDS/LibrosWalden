import React from 'react';
import WaldenImg from './multimedia/Walden-HenryThoreau.jfif';
import HaciaUnFuturoVeganoImg from './multimedia/Hacia-un-futuro-vegano.jfif';
import UnMundoFelizImg from './multimedia/Un-mundo-feliz.jfif';
import HippieImg from './multimedia/Hippie.jpg';

export default function Catalogo() {
    const catalogo = [
        {
            id: 0,
            precio: [1699, 1199, 700],
            titulo: 'Walden',
            autor: 'Henry Thoreau',
            imagen: {WaldenImg},
            descripcion: 'Walden es un ensayo, publicado en 1854, cuyo autor es Henry David Thoreau y constituye uno de los textos de no ficción más famosos escritos por un estadounidense. En él, el autor narra los dos años, dos meses y dos días que vivió en una cabaña construida por él mismo, cercana al lago Walden.'
        },
        {
            id: 1,
            precio: [2049, 1599, 599],
            titulo: 'Hacia un futuro vegano',
            autor: 'Tobias Leenaert',
            imagen: {HaciaUnFuturoVeganoImg},
            descripcion: 'En este libro que invita a la reflexión, Tobias Leenaert se aleja de los caminos más convencionales de la defensa de los animales y aborda las estrategias, los objetivos y las herramientas comunicativas del movimiento vegano y animalista desde un nuevo prisma.'
        },
        {
            id: 2,
            precio: [1800, 1150, 699],
            titulo: 'Un mundo feliz',
            autor: 'Aldous Huxley',
            imagen: {UnMundoFelizImg},
            descripcion: 'Un mundo feliz es la novela más famosa del escritor británico Aldous Huxley, publicada por primera vez en 1932. La novela es una distopía que anticipa el desarrollo en tecnología reproductiva, cultivos humanos e hipnopedia, manejo de las emociones por medio de drogas que, combinadas, cambian radicalmente la sociedad.'
        },
        {
            id: 3,
            precio: [2000, 1200, 500],
            titulo: 'Hippie',
            autor: 'Paulo Coelho',
            imagen: {HippieImg},
            descripcion: 'En su libro más autobiográfico, Paulo Coelho narra el encuentro entre dos jóvenes: Paulo, que sueña con ser escritor y llega a Amsterdam en busca de libertad y de un sentido para su vida, y Karla, una veinteañera de Rotterdam decidida a cambiar su forma de ver el mundo. Juntos recorrerán “la ruta Hippie” que realizaba el legendario Magic Bus, un viaje por Europa y Asia rumbo a Katmandú. Durante esta experiencia única y transformadora vivirán una gran historia de amor. Con ellos irán pasajeros de diferentes nacionalidades que a lo largo del recorrido se plantearán sus prioridades y valores vitales.'
        }
    ];

    return catalogo;
}