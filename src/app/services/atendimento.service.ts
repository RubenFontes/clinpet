import { Injectable } from '@angular/core';
import { IAtendimento } from '../models/Atendimento';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private storageKey = 'atendimentos';

  constructor() { }

  getAtendimentos(): IAtendimento[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveAtendimentos(atendimentos: IAtendimento[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(atendimentos));
  }

  getAtendimentoByAgendamento(idAgendamento: string): IAtendimento | undefined {
    const atendimentos = this.getAtendimentos();
    return atendimentos.find(a => a.idAgendamento === idAgendamento);
  }

  createAtendimento(atendimento: IAtendimento): void {
    const atendimentos = this.getAtendimentos();
    atendimento.id = crypto.randomUUID();
    atendimentos.push(atendimento);
    this.saveAtendimentos(atendimentos);
  }

  updateAtendimento(atendimento: IAtendimento): void {
    const atendimentos = this.getAtendimentos();
    const index = atendimentos.findIndex(a => a.id === atendimento.id);
    if (index !== -1) {
      atendimentos[index] = atendimento;
      this.saveAtendimentos(atendimentos);
    }
  }

  deleteAtendimento(id: string): void {
    const atendimentos = this.getAtendimentos().filter(a => a.id !== id);
    this.saveAtendimentos(atendimentos);
  }
}
