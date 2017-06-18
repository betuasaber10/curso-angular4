import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente Empleado: ';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;
    public trabajador_externo:boolean;
    public color:string;
    public color_seleccionado:string;

    constructor(){
        this.empleado = new Empleado('Humberto Muñoz', 45, 'Cocinero', true);
        this.trabajadores = [
            new Empleado('Manolo Martinez', 35, 'Administrativo', false),
            new Empleado('Ana Lopez', 25, 'Cocinera', true),
            new Empleado('Victor Robles', 66, 'Programador', false)
        ];
        this.trabajador_externo = true;
        this.color = 'blue';
        this.color_seleccionado = '#ccc';
    }

    ngOnInit(){        
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
    
    cambiarExterno(valor){
        this.trabajador_externo = valor;
    }

    logColorSeleccionado(){
        console.log(this.color_seleccionado);
    }
}