import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name : 'conversor' })
export class ConversorPipe implements PipeTransform {
    transform(n1, n2) {
        let value_one = parseInt(n1);
        let value_two = parseInt(n2);
        return "La Multiplicacion: " + value_one + " X " + value_two + " = " + value_one*value_two;
    }
}