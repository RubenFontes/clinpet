import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPet } from 'src/app/models/Pet';
import { ITutor } from 'src/app/models/Tutor';

@Component({
  selector: 'app-pets-form',
  templateUrl: './pets-form.component.html',
  styleUrls: ['./pets-form.component.css']
})
export class PetsFormComponent {
  @Input() formPet!: FormGroup;
  @Input() petEmEdicao: IPet | null = null;
  @Input() tutores: ITutor[] = [];

  @Output() salvar = new EventEmitter<void>();
  @Output() cancelar = new EventEmitter<void>();
}

