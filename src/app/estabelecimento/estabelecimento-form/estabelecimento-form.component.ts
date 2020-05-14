import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EstabelecimentoService } from '../estabelecimento.service';
import { Estabelecimento } from '../estabelecimento';

@Component({
  selector: 'app-estabelecimento-form',
  templateUrl: './estabelecimento-form.component.html',
  styleUrls: ['./estabelecimento-form.component.css']
})
export class EstabelecimentoFormComponent implements OnInit {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      endereco: [null, [Validators.required]]
    })

    EstabelecimentoService.editarEstabelecimento.subscribe((estabelecimento: Estabelecimento) => {
      console.log(estabelecimento);
      this.formulario.patchValue({ id: estabelecimento.id });
      this.formulario.patchValue({ nome: estabelecimento.nome });
      this.formulario.patchValue({ endereco: estabelecimento.endereco });
    });
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);
    console.log(valueSubmit);

    let headers = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
    }
    
    if (valueSubmit.id == null) {
      this.http
        .post('http://localhost:8000/estabelecimentos', JSON.stringify(valueSubmit), headers)
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            this.formulario.reset();                    
            EstabelecimentoService.criouNovoEstabelecimento.emit(dados as Estabelecimento);
          },
          (error: any) => alert('erro')
        );
    } else {
      this.http
        .put('http://localhost:8000/estabelecimentos/'+valueSubmit.id, JSON.stringify(valueSubmit), headers)
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            this.formulario.reset();                    
            EstabelecimentoService.editouEstabelecimento.emit(dados as Estabelecimento);
          },
          (error: any) => alert('erro')
        );
    }
  }
}
