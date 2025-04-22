import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  slideOpts = {
    slidesPerView: 3, // Muestra 3 elementos por vista
    spaceBetween: 10, // Espacio entre los elementos
    navigation: true, // Habilita las flechas de navegación
    pagination: false, // Desactiva la paginación
    loop: true, // Habilita el bucle infinito
  };
  
  constructor(private router: Router) {}
  onSearch(event: any) {
    const searchTerm = event.target.value;
    console.log('Buscando:', searchTerm);
  }

  irARegistro() {
  this.router.navigate(['/registro']);
  }
}




