import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) {

  }

  pobierzOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>('http://localhost:3200/api/lista');
  }

  pobierzOsobe(id: number): Observable<Osoba> {
    return this.http.get<Osoba>('http://localhost:3200/api/lista/' + id.toString(10));
  }

  test(): String {
    return "jestem tutaj - twoj serwis";
  }
}

export interface Osoba {
  id: number;
  imie: String;
  nazwisko: String;
  wiek?: number;
  pesel?: String;
}