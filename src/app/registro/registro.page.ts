import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // Importar IonicModule
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: true, // Indica que es un componente standalone
  imports: [IonicModule, CommonModule, FormsModule] // Importar los módulos necesarios
})
export class RegistroPage {}
