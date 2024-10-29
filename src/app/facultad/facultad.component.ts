import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-facultad',
  standalone: true,
  imports: [CardComponent, NavbarComponent],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})
export class FacultadComponent {
  titulo='Gestión de Facultades';
  icono='fa-solid fa-shapes';
}
