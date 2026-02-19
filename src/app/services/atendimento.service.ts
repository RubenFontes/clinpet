import { Injectable } from '@angular/core';
import { IAtendimento } from '../models/Atendimento';
import { StorageService } from '../core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {

  private storageKey = 'atendimentos';

  constructor(private storage: StorageService) { }

  // Helpers
  getAtendimentos(): IAtendimento[] {
    return this.storage.get(this.storageKey);
  }

  saveAtendimentos(atendimentos: IAtendimento[]): void {
    this.storage.save<IAtendimento>(this.storageKey, atendimentos);
  }

  getAtendimentoByAgendamento(idAgendamento: string): IAtendimento | undefined {
    const atendimentos = this.getAtendimentos();
    return atendimentos.find(a => a.idAgendamento === idAgendamento);
  }

  // CRUD
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
