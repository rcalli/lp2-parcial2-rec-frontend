import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FacultadComponent } from './facultad/facultad.component';
import { EscuelaComponent } from './escuela/escuela.component';
import { CocheComponent } from './coche/coche.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Home'
    },
    {
        path:'categoria',
        component:CategoriaComponent,
        title:'Categoria'
    },
    {
        path:'cliente',
        component:ClienteComponent,
        title:'Cliente'
    },
    {
        path:'producto',
        component:ProductoComponent,
        title:'Producto'
    },
    {
        path:'facultad',
        component:FacultadComponent,
        title:'Facultad'
    }
    ,
    {
        path:'escuela',
        component:EscuelaComponent,
        title:'Escuela'
    },
    {
        path:'coche',
        component:CocheComponent,
        title:'Coche'
    }


];
