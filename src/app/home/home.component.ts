import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  temperaturas = ['Fahrenheit', 'Kelvin', 'Celsius'];
  formTemperatura = new FormGroup ({
    converterDeTemperatura: new FormControl(''),
    converterParaTemperatura: new FormControl('')
  })

  Medidas = ['Metro','CM','Polegadas','Pé','Jardas'];
  FormMedida = new FormGroup ({
    converterDeMedida:  new FormControl (''),
    converterParaMedida: new FormControl ('')
  })

  Pesos = ['Grama','Kilo','Libra','Onça'];
  FormPeso = new FormGroup ({
    converterDePeso:  new FormControl (''),
    converterParaPeso: new FormControl ('')
  })

  constructor(private router: Router){}

  converterTemperatura(){
    let valor1, valor2;

    valor1 = this.formTemperatura.value.converterDeTemperatura
    valor2 = this.formTemperatura.value.converterParaTemperatura

    this.router.navigate(['/conversor',valor1,valor2])
  }

  converterMedida(){
    console.log(this.FormMedida.value.converterDeMedida)
    let valor1, valor2;

    valor1 = this.FormMedida.value.converterDeMedida
    valor2 = this.FormMedida.value.converterParaMedida

    this.router.navigate(['/conversor',valor1,valor2])
  }

  converterPeso(){
    console.log(this.FormPeso.value)
    let valor1, valor2;

    valor1 = this.FormPeso.value.converterDePeso
    valor2 = this.FormPeso.value.converterParaPeso

    this.router.navigate(['/conversor',valor1,valor2])
  }

}
