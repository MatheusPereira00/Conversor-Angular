import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina-conversor',
  templateUrl: './pagina-conversor.component.html',
  styleUrls: ['./pagina-conversor.component.scss']
})
export class PaginaConversorComponent implements OnInit {

  valor1!: string | null;
  valor2!: string | null;

  constructor(private route: ActivatedRoute ){
  }

  ngOnInit(){

    this.valor1 = this.route.snapshot.paramMap.get('valor1')
    this.valor2 = this.route.snapshot.paramMap.get('valor2')
  }

}
