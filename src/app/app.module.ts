import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ProfissionalFormComponent } from './profissional/profissional-form/profissional-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfissionalTableComponent } from './profissional/profissional-table/profissional-table.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { EstabelecimentoFormComponent } from './estabelecimento/estabelecimento-form/estabelecimento-form.component';
import { EstabelecimentoTableComponent } from './estabelecimento/estabelecimento-table/estabelecimento-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    ProfissionalFormComponent,
    ProfissionalTableComponent,
    EstabelecimentoComponent,
    EstabelecimentoFormComponent,
    EstabelecimentoTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    //TemplateFormModule,
    //DataFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
