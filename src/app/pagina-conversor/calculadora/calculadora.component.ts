import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {

  valor = 'medida'
  inputRecebido! : number

  // falta criar um input e output 

  formConv = new FormGroup ({
   valorInput: new FormControl(''),
  })

  calcularConv(valorInput:number){}


}
