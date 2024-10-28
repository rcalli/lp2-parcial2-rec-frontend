import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [NavbarComponent, CardComponent],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  titulo='Gestión de Productos';
  icono='fa-solid fa-cubes';
}
