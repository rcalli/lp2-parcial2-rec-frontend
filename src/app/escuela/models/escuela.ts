import { Facultad } from "../../facultad/models/facultad";

export class Escuela {
        id:number;
        nombre:string;
        facultad:Facultad;
        constructor(id: number = 0, nombre: string = '', facultad: Facultad = new Facultad()) {
          this.id = id;
          this.nombre = nombre;
          this.facultad = facultad;
        } 
}
    

