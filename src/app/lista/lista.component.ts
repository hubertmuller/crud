import { Component, OnInit } from '@angular/core';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  public a:String;

  constructor(private listaService: ListaService) { 
    this.a = listaService.test();
    listaService.pobierz().subscribe(
      (val) => {
        console.log(val);
      }
    );
  }

  ngOnInit(): void {
  }

}
