import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductoComponent } from './producto/producto.component';
import { ClienteComponent } from './cliente/cliente.component';

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
    }

];
