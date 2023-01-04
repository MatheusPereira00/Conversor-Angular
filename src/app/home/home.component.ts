import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  converterTemperatura(){
    console.log(this.formTemperatura.value)
  }


  Medidas = ['Metro','CM','Polegadas','Pé','Jardas'];
  FormMedida = new FormGroup ({
    converterDeMedida:  new FormControl (''),
    converterParaMedida: new FormControl ('')
  })
  converterMedida(){
    console.log(this.FormMedida.value.converterDeMedida)
  }

  Pesos = ['Grama','Kilo','Libra','Onça'];
  FormPeso = new FormGroup ({
    converterDePeso:  new FormControl (''),
    converterParaPeso: new FormControl ('')
  })
  converterPeso(){
    console.log(this.FormPeso.value)
  }

}
