import { Injectable } from '@angular/core';
import { IAgendamento } from '../models/Agendamento';
import { StorageService } from '../core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private storageKey = 'agendamentos';

  constructor(private storage: StorageService) { }

  // Helpers
  getAgendamentos(): IAgendamento[] {
    return this.storage.get(this.storageKey);
  }

  saveAgendamentos(agendamentos: IAgendamento[]): void {
    this.storage.save<IAgendamento>(this.storageKey, agendamentos);
  }

  // CRUD
  createAgendamento(agendamento: IAgendamento): void {
    const agendamentos = this.getAgendamentos();
    agendamento.id = crypto.randomUUID();
    agendamentos.push(agendamento);
    this.saveAgendamentos(agendamentos);
  }

  readAgendamentos(tipo?: string | null): IAgendamento[] {
    const agendamentos = this.getAgendamentos();
    if (!tipo) {
      return agendamentos;
    } else {
      return agendamentos.filter(agendamentos => agendamentos.tipo === tipo);
    }
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