import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ProductosService } from '../services/productos.service';
import { HeaderComponent } from '../components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, SharedModule, FormsModule]
})
export class ProductosPage implements OnInit {
  productos: any[] = [];
  productosFiltrados: any[] = [];
  filtroTipo: string = '';
  filtroPrecio: number | string | null = null;
  filtroRating: number | string | null = null;

  // Paginación
  paginaActual: number = 1;
  productosPorPagina: number = 8;
  totalPaginas: number = 1;
  _filtradosTotales: any[] = [];

  constructor(private router: Router, private productosService: ProductosService) {}

  ngOnInit() {
    this.productosService.getProductos().subscribe(data => {
      this.productos = data;
      this.aplicarFiltros();
    });
  }

  aplicarFiltros() {
    let precio = (this.filtroPrecio === null || this.filtroPrecio === '') ? undefined : Number(this.filtroPrecio);
    if (precio !== undefined && (isNaN(precio) || precio < 0)) precio = undefined;

    let rating = (this.filtroRating === null || this.filtroRating === '') ? undefined : Number(this.filtroRating);

    let filtrados = this.productos.filter(p => {
      const coincideTipo = this.filtroTipo ? p.tipo === this.filtroTipo : true;
      const coincidePrecio = precio !== undefined ? p.precio <= precio : true;
      const coincideRating = rating !== undefined ? p.rating >= rating : true;
      return coincideTipo && coincidePrecio && coincideRating;
    });

    this.totalPaginas = Math.ceil(filtrados.length / this.productosPorPagina) || 1;
    this.paginaActual = 1;
    this.productosFiltrados = this.getPagina(filtrados, this.paginaActual);
    this._filtradosTotales = filtrados;
  }

  limpiarFiltros() {
    this.filtroTipo = '';
    this.filtroPrecio = null;
    this.filtroRating = null;
    this.aplicarFiltros();
  }

  getPagina(lista: any[], pagina: number) {
    const start = (pagina - 1) * this.productosPorPagina;
    return lista.slice(start, start + this.productosPorPagina);
  }

  cambiarPagina(delta: number) {
    const nueva = this.paginaActual + delta;
    if (nueva < 1 || nueva > this.totalPaginas) return;
    this.paginaActual = nueva;
    this.productosFiltrados = this.getPagina(this._filtradosTotales, this.paginaActual);
  }

  verDetalle(producto: any) {
    this.router.navigate(['/productos', producto._id]);
  }
}
