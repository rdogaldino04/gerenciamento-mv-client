import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfissionalService } from '../profissional.service';
import { Profissional } from '../profissional';

@Component({
  selector: 'app-profissional-form',
  templateUrl: './profissional-form.component.html',
  styleUrls: ['./profissional-form.component.css']
})
export class ProfissionalFormComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(55)]],
      endereco: [null, [Validators.required]]
    })

    ProfissionalService.editarProfissional.subscribe((profissional: Profissional) => {
      console.log(profissional);
      this.formulario.patchValue({ id: profissional.id });
      this.formulario.patchValue({ nome: profissional.nome });
      this.formulario.patchValue({ endereco: profissional.endereco });
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
        .post('http://localhost:8000/profissionais', JSON.stringify(valueSubmit), headers)
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            this.formulario.reset();                    
            ProfissionalService.criouNovoProfissional.emit(dados as Profissional);
          },
          (error: any) => alert('erro')
        );
    } else {
      this.http
        .put('http://localhost:8000/profissionais/'+valueSubmit.id, JSON.stringify(valueSubmit), headers)
        .subscribe(
          dados => {
            console.log(dados);
            // reseta o form
            this.formulario.reset();                    
            ProfissionalService.editouProfissional.emit(dados as Profissional);
          },
          (error: any) => alert('erro')
        );
    }
  }

}
