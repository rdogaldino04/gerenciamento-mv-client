import { Injectable, EventEmitter } from '@angular/core';
import { Estabelecimento } from './estabelecimento';
import { Profissional } from '../profissional/profissional';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  static criouNovoEstabelecimento = new EventEmitter<Estabelecimento>();
  static editouEstabelecimento = new EventEmitter<Estabelecimento>();
  static editarEstabelecimento = new EventEmitter<Estabelecimento>();
  static deletarEstabelecimento = new EventEmitter<Estabelecimento>();
  static selecionouEstabelecimento = new EventEmitter<number>();
  static vinculouProfissional = new EventEmitter<number>();
  static desvinculouProfissional = new EventEmitter<number>();

  constructor() { }
}
