import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginaConversorComponent } from './pagina-conversor/pagina-conversor.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'conversor/:valor1/:valor2', component: PaginaConversorComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
