import { Injectable, EventEmitter } from '@angular/core';
import { Profissional } from './profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  static criouNovoProfissional = new EventEmitter<Profissional>();
  static editouProfissional = new EventEmitter<Profissional>();
  static editarProfissional = new EventEmitter<Profissional>();
  static deletarProfissional = new EventEmitter<Profissional>();

  constructor() { }

}
