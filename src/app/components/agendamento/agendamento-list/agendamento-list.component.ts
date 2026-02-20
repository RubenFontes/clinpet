import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAgendamento } from 'src/app/models/Agendamento';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.css']
})
export class AgendamentoListComponent {
  @Input() mostrarListagem = true;
  @Input() agendamentos: IAgendamento[] = [];
  @Input() agendamentosFiltrados: IAgendamento[] = [];

  @Output() buscar = new EventEmitter<string>();
  @Output() editar = new EventEmitter<IAgendamento>();
  @Output() deletar = new EventEmitter<string>();
}

