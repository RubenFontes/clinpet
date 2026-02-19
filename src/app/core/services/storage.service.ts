import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch {
      return [];
    }
  }

  save<T>(key: string, items: T[]): void {
    localStorage.setItem(key, JSON.stringify(items));
  }

}
