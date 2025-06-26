import { Component, OnInit } from '@angular/core';


// 1. Define una interfaz para tus filterOptions
interface FilterOptions {
  hoja: string[];
  tamaño: string[];
  color: string[];
  encuadernado: string[];
  marca: string[];
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  // --- Tus productos de ejemplo ---
  allProducts: any[] = [
    {
      nombre: 'Cuaderno Rodeo',
      imagen: 'assets/cuaderno_rodeo.png',
      descripcion: 'Cuaderno con diseño de vaquero.',
      precio: 12990,
      rating: 4,
      tipo: 'Cuaderno',
      hoja: 'Rayado',
      tamaño: 'A5',
      color: 'Rosa',
      encuadernado: 'Espiral',
      marca: 'Graphia'
    },
    {
      nombre: 'Cuaderno Perritos',
      imagen: 'assets/cuaderno_perritos.png',
      descripcion: 'Cuaderno con tiernos perritos.',
      precio: 18990,
      rating: 5,
      tipo: 'Cuaderno',
      hoja: 'Puntos',
      tamaño: 'A5',
      color: 'Rosado',
      encuadernado: 'Cosido',
      marca: 'Happy Notes'
    },
    {
      nombre: 'Cuaderno Margaritas',
      imagen: 'assets/cuaderno_margaritas.png',
      descripcion: 'Cuaderno floral con margaritas.',
      precio: 14990,
      rating: 4,
      tipo: 'Cuaderno',
      hoja: 'Cuadriculado',
      tamaño: 'A4',
      color: 'Morado',
      encuadernado: 'Anillos',
      marca: 'Flower Power'
    },
    {
      nombre: 'Cuaderno de Cartas Felices',
      imagen: 'assets/cuaderno_cartas_felices.png',
      descripcion: 'Cuaderno con diseño de cartas vintage.',
      precio: 17990,
      rating: 4,
      tipo: 'Cuaderno',
      hoja: 'Blanco',
      tamaño: 'A5',
      color: 'Multicolor',
      encuadernado: 'Espiral',
      marca: 'Vintage Vibes'
    },
    {
      nombre: 'Cuaderno Dancing Queen',
      imagen: 'assets/cuaderno_dancing_queen.png',
      descripcion: 'Cuaderno para amantes de la música.',
      precio: 18990,
      rating: 5,
      tipo: 'Cuaderno',
      hoja: 'Rayado',
      tamaño: 'A5',
      color: 'Rosa',
      encuadernado: 'Cosido',
      marca: 'Pop Beats'
    },
    {
      nombre: 'Cuaderno Written in the Stars',
      imagen: 'assets/cuaderno_written_in_the_stars.png',
      descripcion: 'Cuaderno con diseño de constelaciones.',
      precio: 14990,
      rating: 5,
      tipo: 'Cuaderno',
      hoja: 'Puntos',
      tamaño: 'A5',
      color: 'Azul Marino',
      encuadernado: 'Tapa Dura',
      marca: 'Cosmic Dreams'
    },
    {
      nombre: 'Cuaderno Flores',
      imagen: 'assets/cuaderno_flores.png',
      descripcion: 'Cuaderno con vibrante diseño floral.',
      precio: 10990,
      rating: 3,
      tipo: 'Cuaderno',
      hoja: 'Rayado',
      tamaño: 'A6',
      color: 'Multicolor',
      encuadernado: 'Espiral',
      marca: 'Garden Blooms'
    },
    {
      nombre: 'Cuaderno Celeste',
      imagen: 'assets/cuaderno_celeste.png',
      descripcion: 'Cuaderno con diseño minimalista celeste.',
      precio: 8990,
      rating: 4,
      tipo: 'Cuaderno',
      hoja: 'Blanco',
      tamaño: 'A6',
      color: 'Celeste',
      encuadernado: 'Cosido',
      marca: 'Minimalist'
    },
    {
      nombre: 'Cuaderno Notes & Ideas',
      imagen: 'assets/cuaderno_notes_ideas.png',
      descripcion: 'Cuaderno práctico para notas y ideas.',
      precio: 10990,
      rating: 4,
      tipo: 'Cuaderno',
      hoja: 'Puntos',
      tamaño: 'A5',
      color: 'Naranja',
      encuadernado: 'Anillos',
      marca: 'Thought Flow'
    },
    // Añade más productos si tienes más
  ];
  productosFiltrados: any[] = [];
  productosPorPagina: number = 9;
  paginaActual: number = 1;
  totalPaginas: number = 1;

  // --- Modelo de Filtro (para vincular con la UI) ---
  filtroTipo: string = '';
  filtroHoja: string = '';
  filtroTamano: string = '';
  filtroColor: string = '';
  filtroEncuadernado: string = '';
  filtroMarca: string = '';

  filtroPrecioMin: number = 0;
  filtroPrecioMax: number = 50000;

  filtroRating: number | null = null;

  // 2. Aplica la interfaz a filterOptions
  filterOptions: FilterOptions = {
    hoja: [],
    tamaño: [],
    color: [],
    encuadernado: [],
    marca: []
  };

  // --- Estados de Activación/Desactivación del Sidebar ---
  filters = [
    { name: 'Tipo de Hoja', key: 'hoja', open: false },
    { name: 'Tamaño', key: 'tamaño', open: false },
    { name: 'Color', key: 'color', open: false },
    { name: 'Encuadernado', key: 'encuadernado', open: false },
    { name: 'Marca', key: 'marca', open: false },
    { name: 'Precio', key: 'precio', open: true },
    { name: 'Valoración', key: 'rating', open: true }
  ];


  constructor() { }

  ngOnInit() {
    this.extractFilterOptions();
    this.aplicarFiltros();
  }

  extractFilterOptions() {
    // 3. Modifica uniqueOptions para que retorne explícitamente un string[]
    const uniqueOptions = (key: string): string[] => {
      if (!this.allProducts || this.allProducts.length === 0) {
        return [];
      }
      // Asegúrate de que el mapeo devuelva strings o maneja tipos mixtos
      const options = [...new Set(this.allProducts.map(p => p[key]))];
      return options.filter(item => typeof item === 'string').sort() as string[];
    };

    this.filterOptions.hoja = uniqueOptions('hoja');
    this.filterOptions.tamaño = uniqueOptions('tamaño');
    this.filterOptions.color = uniqueOptions('color');
    this.filterOptions.encuadernado = uniqueOptions('encuadernado');
    this.filterOptions.marca = uniqueOptions('marca');
  }

  toggleFilter(filter: any) {
    filter.open = !filter.open;
  }

  onPriceRangeChange(event: any) {
    this.filtroPrecioMin = event.detail.value.lower;
    this.filtroPrecioMax = event.detail.value.upper;
    this.aplicarFiltros();
  }

  aplicarFiltros() {
    let productosTemp = [...this.allProducts];

    if (this.filtroHoja) {
      productosTemp = productosTemp.filter(p => p.hoja === this.filtroHoja);
    }
    if (this.filtroTamano) {
      productosTemp = productosTemp.filter(p => p.tamaño === this.filtroTamano);
    }
    if (this.filtroColor) {
      productosTemp = productosTemp.filter(p => p.color === this.filtroColor);
    }
    if (this.filtroEncuadernado) {
      productosTemp = productosTemp.filter(p => p.encuadernado === this.filtroEncuadernado);
    }
    if (this.filtroMarca) {
      productosTemp = productosTemp.filter(p => p.marca === this.filtroMarca);
    }

    if (this.filtroTipo) {
      productosTemp = productosTemp.filter(p => p.tipo === this.filtroTipo);
    }

    productosTemp = productosTemp.filter(p => p.precio >= this.filtroPrecioMin && p.precio <= this.filtroPrecioMax);

    if (this.filtroRating !== null) {
      productosTemp = productosTemp.filter(p => (p.rating || 0) >= this.filtroRating!);
    }

    this.totalPaginas = Math.ceil(productosTemp.length / this.productosPorPagina);
    this.paginaActual = 1;

    this.updateProductosMostrados(productosTemp);
  }

  updateProductosMostrados(filteredList: any[]) {
    const startIndex = (this.paginaActual - 1) * this.productosPorPagina;
    const endIndex = startIndex + this.productosPorPagina;
    this.productosFiltrados = filteredList.slice(startIndex, endIndex);
  }

  limpiarFiltros() {
    this.filtroTipo = '';
    this.filtroHoja = '';
    this.filtroTamano = '';
    this.filtroColor = '';
    this.filtroEncuadernado = '';
    this.filtroMarca = '';
    this.filtroPrecioMin = 0;
    this.filtroPrecioMax = 50000;
    this.filtroRating = null;

    this.filters.forEach(filter => {
      if (filter.key !== 'precio' && filter.key !== 'rating') {
        filter.open = false;
      } else {
        filter.open = true;
      }
    });

    this.aplicarFiltros();
  }

  cambiarPagina(delta: number) {
    const nuevaPagina = this.paginaActual + delta;
    if (nuevaPagina >= 1 && nuevaPagina <= this.totalPaginas) {
      this.paginaActual = nuevaPagina;
      this.aplicarFiltros();
    }
  }

  verDetalle(producto: any) {
    console.log('Ver detalle de:', producto.nombre);
  }

  getStarColor(star: number, rating: number): string {
    return star <= (rating || 0) ? '#FFD700' : '#ccc';
  }
}