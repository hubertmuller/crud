import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private headers = new HttpHeaders();

  constructor(private http: HttpClient) {
    this.headers.append('Accept', 'application/json');
  }

  zapiszOsobe(osoba: Osoba): Observable<any> {
    return this.http.post('http://localhost:3200/api/osoba', osoba, {headers: this.headers});
  }

  aktualizujOsobe(osoba: Osoba): Observable<any> {
    return this.http.put('http://localhost:3200/api/osoba/' + osoba.id.toString(10), osoba, {headers: this.headers});
  }

  usunOsobe(id: number): Observable<any> {
    return this.http.delete('http://localhost:3200/api/osoba/' + id.toString(10), {headers: this.headers});
  }

  pobierzOsoby(): Observable<Osoba[]> {
    return this.http.get<Osoba[]>('http://localhost:3200/api/lista', {headers: this.headers});
  }

  pobierzOsobe(id: number): Observable<Osoba> {
    return this.http.get<Osoba>('http://localhost:3200/api/lista/' + id.toString(10), {headers: this.headers});
  }

}

export interface Osoba {
  id?: number;
  imie: String;
  nazwisko: String;
  plec: String;
  zyczenia: {
    a: boolean;
    b: boolean;
  }
  szczepionka: String;
  rok: number;
}