import { Injectable } from '@angular/core';
import { IAgendamento } from '../models/Agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private storageKey = 'agendamentos';

  constructor() { }

  getAgendamentos(): IAgendamento[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveAgendamentos(agendamentos: IAgendamento[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(agendamentos));
  }

  readAgendamentos(tipo?: string | null): IAgendamento[] {
    const agendamentos = this.getAgendamentos();
    if (!tipo) {
      return agendamentos;
    } else {
      return agendamentos.filter(agendamentos => agendamentos.tipo === tipo);
    }
  }

  createAgendamento(agendamento: IAgendamento): void {
    const agendamentos = this.getAgendamentos();
    agendamento.id = crypto.randomUUID();
    agendamentos.push(agendamento);
    this.saveAgendamentos(agendamentos);
  }

  updateAgendamento(agendamento: IAgendamento): void {
    const agendamentos = this.getAgendamentos();
    const index = agendamentos.findIndex(a => a.id === agendamento.id);
    if (index !== -1) {
      agendamentos[index] = agendamento;
      this.saveAgendamentos(agendamentos);
    }
  }

  deleteAgendamento(id: string): void {
    const agendamentos = this.getAgendamentos().filter(a => a.id !== id);
    this.saveAgendamentos(agendamentos);
  }
}