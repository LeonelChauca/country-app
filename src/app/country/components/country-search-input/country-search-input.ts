import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './country-search-input.html',
})
export class CountrySearchInput {
  onSearch(value: string) {
    console.log(value);
  }
  placeholder = input<string>('Buscar');
  value = output<string>();
}
