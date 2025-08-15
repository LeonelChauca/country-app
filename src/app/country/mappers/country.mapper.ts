import { Country } from '../interfaces/country.interface';
import { RESTCountry } from '../interfaces/rest-countries.interfaces';

export class CountryMapper {
  static RestCountry(country: RESTCountry): Country {
    return {
      cca2: country.cca2,
      flagSvg: country.flags.svg,
      flag: country.flag,
      name: country.translations['spa'].official ?? 'No spanish name',
      capital: country.capital,
      population: country.population,
    };
  }

  static RestCountryArray(countries: RESTCountry[]): Country[] {
    return countries.map((country) => this.RestCountry(country));
  }
}
