import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAgendamento } from 'src/app/models/Agendamento';
import { IPet } from 'src/app/models/Pet';
import { ITutor } from 'src/app/models/Tutor';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.css']
})
export class AgendamentoListComponent {
  @Input() mostrarListagem = true;
  @Input() agendamentos: IAgendamento[] = [];
  @Input() agendamentosFiltrados: IAgendamento[] = [];
  @Input() pets: IPet[] = [];
  @Input() tutores: ITutor[] = [];

  @Output() buscar = new EventEmitter<string>();
  @Output() editar = new EventEmitter<IAgendamento>();
  @Output() deletar = new EventEmitter<string>();

  getNomePet(petId: string): string {
    const pet = this.pets.find(p => p.id === petId);
    return pet?.nome || 'Pet não encontrado';
  }

  getNomeTutor(petId: string): string {
    const pet = this.pets.find(p => p.id === petId);
    if (pet) {
      const tutor = this.tutores.find(t => t.id === pet.tutorId);
      return tutor?.nome || 'Tutor não encontrado';
    }
    return '';
  }
}

