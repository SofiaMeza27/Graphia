import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class HomePage {
  categories = [
    { name: 'LIBRETAS', subtitle: 'ARTE', icon: 'book-outline' },
    { name: 'LAPICES', subtitle: 'SILLAS', icon: 'pencil-outline' },
    { name: 'ESTUCHES', subtitle: 'OFICINA', icon: 'briefcase-outline' },
    { name: 'SILLAS', subtitle: 'OFICINA', icon: 'chair-outline' },
    { name: 'MESAS', subtitle: 'OFICINA', icon: 'desktop-outline' },
    { name: 'ARCHIVOS', subtitle: 'ORGANIZACIÓN', icon: 'folder-outline' }
  ];

  featuredProducts = [
    { name: 'Silla Ejecutiva', price: '$89.990', image: 'https://placehold.co/300x200?text=Silla+Ejecutiva' },
    { name: 'Libreta Profesional', price: '$12.990', image: 'https://placehold.co/300x200?text=Libreta+Profesional' },
    { name: 'Set de Lápices', price: '$8.990', image: 'https://placehold.co/300x200?text=Set+de+Lápices' },
    { name: 'Estuche Organizador', price: '$15.990', image: 'https://placehold.co/300x200?text=Estuche+Organizador' }
  ];
}