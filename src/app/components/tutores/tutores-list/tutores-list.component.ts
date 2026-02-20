import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITutor } from 'src/app/models/Tutor';

@Component({
  selector: 'app-tutores-list',
  templateUrl: './tutores-list.component.html',
  styleUrls: ['./tutores-list.component.css']
})
export class TutoresListComponent {
  @Input() mostrarListagem = true;
  @Input() tutores: ITutor[] = [];
  @Input() tutoresFiltrados: ITutor[] = [];

  @Output() buscar = new EventEmitter<string>();
  @Output() editar = new EventEmitter<ITutor>();
  @Output() deletar = new EventEmitter<string>();
}

