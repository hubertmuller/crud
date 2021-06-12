import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class NaszValidator {
  static reszta(wartosc: number, modulo: number) {
    return function (control: FormControl) {
      const biezacaWartosc = control.value;

      if (biezacaWartosc % wartosc === modulo) {
        return null;
      } else {
        return { "zle": "reszta z dzielenia " + biezacaWartosc + " przez " + wartosc + " nie wynosi " + modulo};
      }
    }
  }
}

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  public forma:FormGroup = new FormGroup( {
    imie: new FormControl('Adam', {validators: [NaszValidator.reszta(3,2)], updateOn: "change"}),
    nazwisko: new FormControl('Kowalski', {validators: [], updateOn: "change"}),
    szczepionka: new FormControl(null, {validators: [], updateOn: "change"}),
    plec: new FormControl(null, {validators: [Validators.required], updateOn: "change"})
  }); 


  constructor() {
    console.log('konstruktor');
  }

  ngOnInit(): void {
    console.log('dziendobry');
    this.forma.valueChanges.subscribe( (val) => {
      if (val.imie === 'Hubert') {
        console.log('hubert');
      }
    });
  }

  ngOnDestroy(): void {
    console.log('do widzenia');
  }

}
