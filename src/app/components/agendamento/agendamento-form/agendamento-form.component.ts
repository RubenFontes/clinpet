import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAgendamento } from 'src/app/models/Agendamento';
import { IPet } from 'src/app/models/Pet';
import { ITutor } from 'src/app/models/Tutor';

@Component({
  selector: 'app-agendamento-form',
  templateUrl: './agendamento-form.component.html',
  styleUrls: ['./agendamento-form.component.css']
})
export class AgendamentoFormComponent {
  @Input() formAgendamento!: FormGroup;
  @Input() agendamentoEmEdicao: IAgendamento | null = null;
  @Input() pets: IPet[] = [];
  @Input() tutores: ITutor[] = [];

  @Output() salvar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();
}

