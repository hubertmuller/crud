import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListaService, Osoba } from '../lista.service';

@Component({
  selector: 'app-detale',
  templateUrl: './detale.component.html',
  styleUrls: ['./detale.component.scss']
})
export class DetaleComponent implements OnInit {
  public osoba:Osoba;
  public id: number;

  constructor(private route: ActivatedRoute, private listaService: ListaService) { 

  }

  ngOnInit(): void {
    this.route.params.subscribe( (params: Params) => {
      this.id = params.id;
      console.log(this.id);
      this.listaService.pobierzOsobe(this.id).subscribe(
        (val:Osoba) => {
         this.osoba = val;
         
        }
      );
    })
  }

}
