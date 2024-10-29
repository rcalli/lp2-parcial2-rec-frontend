import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Facultad } from '../facultad/models/facultad';
import { Escuela } from './models/escuela';
import { EscuelaService } from './services/escuela.service';
import { FacultadService } from '../facultad/services/facultad.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-escuela',
  standalone: true,
  imports: [CardComponent, NavbarComponent, CommonModule],
  templateUrl: './escuela.component.html',
  styleUrl: './escuela.component.css'
})
export class EscuelaComponent {
  titulo='Gestión de Escuelas';
  icono='fa-solid fa-shapes';
  facultades:Facultad[]=[];
  escuelas:Escuela[]=[];
  title:string='';
  opc:string='';
  facultad= new Facultad();
  escuela= new Escuela();
  op = 0; 
  visible: boolean = false; 
  isDeleteInProgress: boolean = false;
  modal:any;
  constructor(
    private escuelaService: EscuelaService,
    private facultaService: FacultadService
  ){}
  ngOnInit():void{
    this.listarFacultades();
    this.listarEscuelas();
  }
  listarFacultades(){
    this.facultaService.getFacultades().subscribe((data)=>{
      this.facultades=data;
    });
  }
  listarEscuelas(){
    this.escuelaService.getEscuelas().subscribe((data)=>{
      this.escuelas=data;
    });
  }
  mostrar(){
    
  }
  
}
