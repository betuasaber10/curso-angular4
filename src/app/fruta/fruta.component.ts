import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta';
    public listado_frutas = 'Naranja, Manzana, Pera y Sandia';
    public nombre:string;
    public edad:number;
    public mayorDeEdad:boolean;
    public trabajos:Array<any> = ['Carpintero', 22, 'Fontanero'];
    comodin:any;
    //para dar valor a las propiedades
    constructor(){
        this.nombre = 'Humberto Mu;oz';
        this.edad = 77;
        this.mayorDeEdad = false;
        this.comodin = "SI";        
    }
    //primera funcion en cargarse despues del constructor
    ngOnInit(){
        this.cambiarNombre();
        this.cambiarEdad(45);
        console.log(this.nombre + " " + this.edad);

        //variables y alcance
        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3;
            var dos = 88;
            console.log('dentro del if: ' + uno + " " + dos);
        }
        console.log('fuera del if: ' + uno + " " + dos);
    }

    cambiarNombre(){
        this.nombre = 'Juan Perez';        
    }
    cambiarEdad(edad){
        this.edad = edad;
    }
}