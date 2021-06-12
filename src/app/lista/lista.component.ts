import { Component, OnInit } from '@angular/core';
import { ListaService, Osoba } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public osoby:Osoba[];

  constructor(private listaService: ListaService) { 
    listaService.pobierzOsoby().subscribe(
      (val:Osoba[]) => {
       this.osoby = val;
      }
    );
  }

  ngOnInit(): void {
  }

}
