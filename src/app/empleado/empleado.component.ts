import { Component } from '@angular/core';
import {  Empleado } from './empleado';

@Component({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})
export class EmpleadoComponent{
    public titulo = 'Componente Empleado: ';
    public empleado:Empleado;
    public trabajadores:Array<Empleado>;

    constructor(){
        //this.empleado = new Empleado('Humberto Mu;oz', 45, 'Cocinero', true);
        this.trabajadores = [
            new Empleado('Juan Perez', 5, 'Ingeniero', false),
            new Empleado('Albert Einstein', 54, 'Fisico', true),
            new Empleado('Pitagoras', 87, 'Matematico', true)
        ];
    }

    ngOnInit(){        
        console.log(this.empleado);
        console.log(this.trabajadores);
    }
}