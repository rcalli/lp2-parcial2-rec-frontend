import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { Marca } from '../marca/models/marca';
import { Coche } from './models/coche';
import { Tipo } from '../tipo/models/tipo';
import { CocheService } from './services/coche.service';
import { MarcaService } from '../marca/services/marca.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TipoService } from '../tipo/services/tipo.service';
@Component({
  selector: 'app-coche',
  standalone: true,
  imports: [CardComponent, NavbarComponent, CommonModule,FormsModule],
  templateUrl: './coche.component.html',
  styleUrl: './coche.component.css'
})
export class CocheComponent {
  titulo='Gestión de Coches';
  icono='fa-solid fa-shapes';
  marcas:Marca[]=[];
  coches:Coche[]=[];
  tipos:Tipo[]=[];
  title:string='';
  opc:string='';
  marca= new Marca();
  coche= new Coche();
  tipo = new Tipo();
  op = 0;
  tituloModal = 'Crear COCHE'; 
  visible: boolean = false; 
  isDeleteInProgress: boolean = false;
  modal:any;
  forModal:any;
  
  constructor(
    private cocheService: CocheService,
    private marcaService: MarcaService,
    private tipoService: TipoService
  ){}
  ngOnInit():void{
    this.listarMarcas();
    this.listarCoches();
    this.listarTipos();
    const modalElement = document.getElementById("exampleModal");
  if (modalElement) {
    this.forModal = new window.bootstrap.Modal(modalElement);
  } else {
    console.error("Modal element not found");
  }
  }
  listarMarcas(){
    this.marcaService.getMarcas().subscribe((data)=>{
      this.marcas=data;
    });
  }
  listarTipos(){
    this.tipoService.getTipoes().subscribe((data)=>{
      this.tipos=data;
    });
  }
  listarCoches(){
    this.cocheService.getCoches().subscribe((data)=>{
      this.coches=data;
    });
  }
  mostrar(){
    this.forModal.show();    
  }
  showDialogEdit(id: number) {
    this.cocheService.getCocheById(id).subscribe((data) => {
        this.coche = data;
        this.tituloModal = 'Editar COCHE';
    });
    this.mostrar();
}


  deleteCoche(id: number) {
    this.cocheService.deleteCoche(id).subscribe({
        next:()=>{
          this.listarCoches();
        }
    });     
  }
  addCoche():void{ 
    this.cocheService.createCoche(this.coche).subscribe({
            next:()=>{
                  this.listarCoches();
            }
            
    });          
        this.forModal.hide();
        this.resetModal();
  }
  editCoche() {
    this.cocheService.updateCoche(this.coche, this.coche.id).subscribe({
        next: () => {
            this.listarCoches();
            this.forModal.hide();
            this.coche = new Coche();
        }
    });
    this.resetModal();
}

resetModal() {
    this.coche = new Coche();
    this.tituloModal = 'Crear COCHE';
}



}
