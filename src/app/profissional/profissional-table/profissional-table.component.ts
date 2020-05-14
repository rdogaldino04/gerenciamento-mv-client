import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profissional } from '../profissional';
import { ProfissionalService } from '../profissional.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profissional-table',
  templateUrl: './profissional-table.component.html',
  styleUrls: ['./profissional-table.component.css']
})
export class ProfissionalTableComponent implements OnInit {

  profissionais: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadDadosTable();

    ProfissionalService.criouNovoProfissional.subscribe(
      prof => this.profissionais.push(prof)
    );

    ProfissionalService.editouProfissional.subscribe(  
      prof => this.profissionais.forEach((element, index) => {
        if(element.id === prof.id) {
          this.profissionais[index] = prof;
        }
      })
    );

  }

  onEdit(profissional) {
    console.log(profissional);
    ProfissionalService.editarProfissional.emit(profissional);
  }

  onDelete(profissional) {
    console.log(profissional);
    this.http
    .delete('http://localhost:8000/profissionais/'+profissional.id)
    .subscribe(
      dados => {
        console.log(dados);        
        this.loadDadosTable();
      },
      (error: any) => {
        let value = Object.assign({}, error);
        alert(value.error.userMessage);
        //console.log(value.error.userMessage);
      });    
  }

  loadDadosTable() {
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
}
