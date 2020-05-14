import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalComponent } from './profissional/profissional.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { VinculoProfissionalComponent } from './estabelecimento/vinculo-profissional/vinculo-profissional.component';

const routes: Routes = [
  { path: 'profissionais', component: ProfissionalComponent },
  { path: 'estabelecimentos', component: EstabelecimentoComponent },
  { path: 'vinculo-estabelecimento-profissionais', component: VinculoProfissionalComponent },
  //{ path: '', pathMatch: 'full', redirectTo: 'dataForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
