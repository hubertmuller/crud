import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private http: HttpClient) {

  }

  pobierz(): Observable<any> {
    return this.http.get('http://localhost:3200/api/lista');
  }

  test(): String {
    return "jestem tutaj - twoj serwis";
  }
}
