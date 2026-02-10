import { Injectable } from '@angular/core';
import { IPet } from '../models/Pet';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private storageKey = 'pets';

  constructor() { }

  getPets(): IPet[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  readPets(nome?: string | null): IPet[] {
    const pets = this.getPets();
    if (!nome) {
      return pets;
    } else {
      return pets.filter(pet => pet.nome === nome);
    }
  }

  savePets(pets: IPet[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(pets));
  }

  createPet(pet: IPet): void {
    const pets = this.getPets();
    pet.id = crypto.randomUUID();
    pets.push(pet);
    this.savePets(pets);
  }

  updatePet(pet: IPet): void {
    const pets = this.getPets();
    const index = pets.findIndex(p => p.id === pet.id);
    if (index !== -1) {
      pets[index] = pet;
      this.savePets(pets);
    }
  }

  deletePet(id: string): void {
    const pets = this.getPets().filter(p => p.id !== id);
    this.savePets(pets);
  }
}