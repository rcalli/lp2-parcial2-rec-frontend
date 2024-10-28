import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CardComponent, NavbarComponent],
  templateUrl: './cliente.component.html',
  styleUrl: './cliente.component.css'
})
export class ClienteComponent {
  titulo='Gestión de Clientes';
  icono='fa-solid fa-user-large';
}
