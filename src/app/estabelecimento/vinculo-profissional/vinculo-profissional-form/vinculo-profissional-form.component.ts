import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profissional } from 'src/app/profissional/profissional';
import { Estabelecimento } from '../../estabelecimento';
import { EstabelecimentoService } from '../../estabelecimento.service';

@Component({
  selector: 'app-vinculo-profissional-form',
  templateUrl: './vinculo-profissional-form.component.html',
  styleUrls: ['./vinculo-profissional-form.component.css']
})
export class VinculoProfissionalFormComponent implements OnInit {

  formulario: FormGroup;

  profissionais: any[] = [];

  estabelecimentos: any[] = [];

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.loadComboProfissionais();
    this.loadComboestabelecimentos();

    this.formulario = this.formBuilder.group({      
      profissionalId: [null, [Validators.required]],
      estabelecimentoId: [null, [Validators.required]]
    })
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
    console.log(valueSubmit);

    let headers = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }

    this.http
        .put('http://localhost:8000/estabelecimento/' + valueSubmit.estabelecimentoId 
          + '/profissionais/' +valueSubmit.profissionalId, JSON.stringify({}), headers)
        .subscribe(
          dados => {
            console.log(valueSubmit);
            EstabelecimentoService.vinculouProfissional.emit(valueSubmit.estabelecimentoId);
            //this.formulario.reset();                                
          },
          (error: any) => {
            let value = Object.assign({}, error);
            alert(value.error.userMessage);
            //console.log(value.error.userMessage);
          }
        );
  }

  loadComboProfissionais() {
    this.http
      .get('http://localhost:8000/profissionais')
      .subscribe(
        dados => {
          console.log(dados);
          this.profissionais = dados as Profissional[];
        },
        (error: any) => alert('erro')
    );
  }

  loadComboestabelecimentos() {
    this.http
      .get('http://localhost:8000/estabelecimentos')
      .subscribe(
        dados => {
          console.log(dados);
          this.estabelecimentos = dados as Estabelecimento[];
        },
        (error: any) => alert('erro')
    );
  }

  onSelectedEstabelecimento(estabelecimentoId: number) {
    console.log(estabelecimentoId);
    EstabelecimentoService.selecionouEstabelecimento.emit(estabelecimentoId);
  }

}
