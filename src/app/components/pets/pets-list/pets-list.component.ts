import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPet } from 'src/app/models/Pet';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent {
  @Input() mostrarListagem = true;
  @Input() pets: IPet[] = [];
  @Input() petsFiltrados: IPet[] = [];

  @Output() buscar = new EventEmitter<string>();
  @Output() editar = new EventEmitter<IPet>();
  @Output() deletar = new EventEmitter<string>();

  get hasPets(): boolean {
    return this.pets.length > 0;
  }
}

