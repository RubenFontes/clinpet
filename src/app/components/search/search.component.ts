import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Input() placeholder: string = 'Buscar...';
  @Output() onSearch = new EventEmitter<string>();

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.onSearch.emit(value);
  }
}