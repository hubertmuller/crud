import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormularzComponent } from '../formularz/formularz.component';
import { Osoba } from '../lista.service';

@Component({
  selector: 'app-edycja',
  templateUrl: './../formularz/formularz.component.html',
  styleUrls: ['./../formularz/formularz.component.scss']
})
export class EdycjaComponent extends FormularzComponent implements OnInit {
  public czynnosc = 'Edytuj';

  ngOnInit() {
    this.listaService.pobierzOsobe(this.params.id).subscribe( (osoba: Osoba) => {
      this.forma.addControl('id', new FormControl('', {validators: [], updateOn: "change"}));
      this.forma.setValue(osoba);
    })
  }
}
