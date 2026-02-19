import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @Output() onSearch = new EventEmitter<string>();

  search(value: string) {
    this.onSearch.emit(value);
  }
}