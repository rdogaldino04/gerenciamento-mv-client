import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalComponent } from './profissional/profissional.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';

const routes: Routes = [
  { path: 'profissionais', component: ProfissionalComponent },
  { path: 'estabelecimentos', component: EstabelecimentoComponent },
  //{ path: '', pathMatch: 'full', redirectTo: 'dataForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
