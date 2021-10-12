import { DepFlags } from "@angular/compiler/src/core";

export interface Country {
  name: Name;
  topLevelDomain: string[];
  cca2: string;
  cca3: string;
  ccn3: number;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  subregion: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  numericCode: string;
  currencies: Currency[];
  languages: Language[];
  translations: Translations;
  flag: string;
  flags: Flags;
  regionalBlocs: RegionalBloc[];
  cioc: string;
}

export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface RegionalBloc {
  acronym: string;
  name: string;
  otherAcronyms: any[];
  otherNames: any[];
}

export interface Translations {
  ces: Translation;
  deu: Translation;
  est: Translation;
  fin: Translation;
  fra: Translation;
  hrv: Translation;
  hun: Translation;
  ita: Translation;
  jpn: Translation;
  kor: Translation;
  nld: Translation;
  per: Translation;
  pol: Translation;
  por: Translation;
  rus: Translation;
  slk: Translation;
  spa: Translation;
  swe: Translation;
  urd: Translation;
  zho: Translation;
}

export interface Translation {
  official: string;
  common: string;
}

export interface Flags {
  png: string;
  svg: string;
}

export interface Name {
  common: string;
  nativeName: string;
}
