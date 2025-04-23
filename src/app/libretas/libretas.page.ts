import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libretas',
  templateUrl: './libretas.page.html',
  styleUrls: ['./libretas.page.scss'],
  standalone: false,
})
export class LibretasPage implements OnInit {

  filters = [
    {
      name: 'Tipo de hoja',
      open: false,
      options: ['Cuadriculado', 'Liso', 'Rayado'],
    },
    {
      name: 'Tamaño',
      open: false,
      options: ['A4', 'A5', 'Carta'],
    },
    {
      name: 'Color',
      open: false,
      options: ['Rojo', 'Azul', 'Verde'],
    },
    {
      name: 'Encuadernado',
      open: false,
      options: ['Anillado', 'Pegado'],
    },
    {
      name: 'Marca',
      open: false,
      options: ['Marca 1', 'Marca 2', 'Marca 3'],
    },
    {
      name: 'Valoración',
      open: false,
      options: ['1 estrella', '2 estrellas', '3 estrellas', '4 estrellas', '5 estrellas'],
    },
  ];
  
  products = [
    {
      name: 'Cuaderno Rodeo',
      price: '$12.990',
      image: 'assets/cuaderno-rodeo.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno Perritos',
      price: '$10.990',
      image: 'assets/cuaderno-perritos.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno Margaritas',
      price: '$14.990',
      image: 'assets/cuaderno-margaritas.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno de Caritas Felices',
      price: '$17.990',
      image: 'assets/cuaderno-caritas.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno Dancing Queen',
      price: '$18.990',
      image: 'assets/cuaderno-dancing.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno Written in the Stars',
      price: '$14.990',
      image: 'assets/cuaderno-stars.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno Flores',
      price: '$10.990',
      image: 'assets/cuaderno-flores.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno Celeste',
      price: '$8.990',
      image: 'assets/cuaderno-celeste.png',
      rating: 5, // Calificación de 5 estrellas
    },
    {
      name: 'Cuaderno Notes & Ideas',
      price: '$10.990',
      image: 'assets/cuaderno-notes.png',
      rating: 5, // Calificación de 5 estrellas
    },
  ];
  constructor() { }

  ngOnInit() {
  }

  toggleFilter(filter: any) {
    filter.open = !filter.open;
  }

  onSearch(event: any) {
    const searchTerm = event.target.value;
    console.log('Buscando:', searchTerm);
  }

}
