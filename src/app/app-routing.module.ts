import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfissionalComponent } from './profissional/profissional.component';

const routes: Routes = [
  { path: 'profissionais', component: ProfissionalComponent },
  //{ path: 'dataForm', component: DataFormComponent },
  //{ path: '', pathMatch: 'full', redirectTo: 'dataForm' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
