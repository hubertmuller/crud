import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListaService, Osoba } from '../lista.service';

@Component({
  selector: 'app-usun',
  templateUrl: './usun.component.html',
  styleUrls: ['./usun.component.scss']
})
export class UsunComponent implements OnInit {

  public id: number;
  public deleted: boolean = false;

  constructor(private route: ActivatedRoute, private listaService: ListaService) { 
    this.route.params.subscribe( (params: Params) => {
      this.id = params.id;
      this.listaService.usunOsobe(this.id).subscribe(
        () => {
          this.deleted = true;
          console.log('usunieto osobe o id '+ this.id)
        }
      );
    })
  }

  ngOnInit(): void {
    
  }

  

}
