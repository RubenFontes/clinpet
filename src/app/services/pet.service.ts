import { Injectable } from '@angular/core';
import { IPet } from '../models/Pet';
import { StorageService } from '../core/services/storage.service';

@Injectable({
  providedIn: 'root'
})

export class PetService {

  private dataPets: string = 'pets';

  constructor(private storage: StorageService) { }

  // Helpers
  getPets(): IPet[] {
    return this.storage.get(this.dataPets);
  }

  savePets(pets: IPet[]): void {
    this.storage.save<IPet>(this.dataPets, pets);
  }

  // CRUD
  createPet(pet: IPet): void {
    const pets = this.getPets();
    pet.id = crypto.randomUUID();
    pets.push(pet);
    this.savePets(pets);
  }

  readPets(nome?: string | null): IPet[] {
    const pets = this.getPets();
    if (!nome) {
      return pets;
    } else {
      return pets.filter(pet => pet.nome === nome);
    }
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