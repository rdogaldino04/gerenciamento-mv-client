import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EstabelecimentoService } from '../estabelecimento.service';
import { Estabelecimento } from '../estabelecimento';

@Component({
  selector: 'app-estabelecimento-table',
  templateUrl: './estabelecimento-table.component.html',
  styleUrls: ['./estabelecimento-table.component.css']
})
export class EstabelecimentoTableComponent implements OnInit {

  estabelecimentos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadDadosTable();

    EstabelecimentoService.criouNovoEstabelecimento.subscribe(
      estab => this.estabelecimentos.push(estab)
    );

    EstabelecimentoService.editouEstabelecimento.subscribe(  
      estab => this.estabelecimentos.forEach((element, index) => {
        if(element.id === estab.id) {
          this.estabelecimentos[index] = estab;
        }
      })
    );

  }

  onEdit(estabelecimento: Estabelecimento) {
    console.log(estabelecimento);
    EstabelecimentoService.editarEstabelecimento.emit(estabelecimento);
  }

  onDelete(estabelecimento: Estabelecimento) {
    console.log(estabelecimento);
    this.http
    .delete('http://localhost:8000/estabelecimentos/'+estabelecimento.id)
    .subscribe(
      dados => {
        console.log(dados);        
        this.loadDadosTable();
      },
      (error: any) => alert(error)
    );    
  }

  loadDadosTable() {
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

}
