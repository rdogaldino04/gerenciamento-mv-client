import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profissional } from 'src/app/profissional/profissional';
import { EstabelecimentoService } from '../../estabelecimento.service';

@Component({
  selector: 'app-vinculo-profissional-table',
  templateUrl: './vinculo-profissional-table.component.html',
  styleUrls: ['./vinculo-profissional-table.component.css']
})
export class VinculoProfissionalTableComponent implements OnInit {

  profissionais: any[] = [];

  estabelecimentoId = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    EstabelecimentoService.selecionouEstabelecimento.subscribe(
      estabId => {
        this.loadDadosTable(estabId);
        this.estabelecimentoId = estabId;
      }
    );

    EstabelecimentoService.vinculouProfissional.subscribe(
      estabId => {
        console.log(estabId)
        this.loadDadosTable(estabId);
      }
    );

    EstabelecimentoService.desvinculouProfissional.subscribe(
      estabId => {
        console.log(estabId)
        this.loadDadosTable(estabId);
      }
    );
    
  }

  loadDadosTable(estabelecimentoId: number) {
    this.http
      .get('http://localhost:8000/estabelecimento/' + estabelecimentoId + '/profissionais')
      .subscribe(
        dados => {
          console.log(dados);
          this.profissionais = dados as Profissional[];
        },
        (error: any) => {
          let value = Object.assign({}, error);
          alert(value.error.userMessage);
          //console.log(value.error.userMessage);
        }
    );
  }

  onDesvincular(profissionalId: number) {
    console.log(profissionalId);
    console.log(this.estabelecimentoId);

    this.http
        .delete('http://localhost:8000/estabelecimento/' + this.estabelecimentoId 
          + '/profissionais/' + profissionalId)
        .subscribe(
          dados => {
            console.log('Desvinculado com sucesso!');
            EstabelecimentoService.desvinculouProfissional.emit(this.estabelecimentoId);            
          },
          (error: any) => {
            let value = Object.assign({}, error);
            alert(value.error.userMessage);
            //console.log(value.error.userMessage);
          }
        );
  }

}
