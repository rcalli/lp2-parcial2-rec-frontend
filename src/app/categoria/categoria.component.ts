import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [NavbarComponent, CardComponent],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
  titulo='Gestión de Categorías';
  icono='fa-solid fa-shapes';
}
