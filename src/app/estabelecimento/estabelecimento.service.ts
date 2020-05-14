import { Injectable, EventEmitter } from '@angular/core';
import { Estabelecimento } from './estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  static criouNovoEstabelecimento = new EventEmitter<Estabelecimento>();
  static editouEstabelecimento = new EventEmitter<Estabelecimento>();
  static editarEstabelecimento = new EventEmitter<Estabelecimento>();
  static deletarEstabelecimento = new EventEmitter<Estabelecimento>();

  constructor() { }
}
