import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

class NaszValidator {
  static wymaganyWiek(dolna: number, gorna: number) {
    return function (control: FormControl) {
      const biezacaWartosc = control.value;

      const biezacaData = new Date();

      const wiek = biezacaData.getFullYear() - biezacaWartosc;

      if (wiek >= dolna && wiek <=gorna) {
        return null;
      } else {
        return { "poprawnywiek": "Twoj wiek nie mieści się w przedziale od " + dolna + " do" + gorna + " lat"};
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
    imie: new FormControl('Adam', {validators: [], updateOn: "change"}),
    nazwisko: new FormControl('Kowalski', {validators: [], updateOn: "change"}),
    rok: new FormControl(1978, {validators: [NaszValidator.wymaganyWiek(18,100)], updateOn: "change"}),
    szczepionka: new FormControl(null, {validators: [Validators.required], updateOn: "change"}),
    plec: new FormControl(null, {validators: [Validators.required], updateOn: "change"}),
    zyczenia: new FormGroup({
      a: new FormControl(null, {validators: [], updateOn: "change"}),
      b: new FormControl(null, {validators: [], updateOn: "change"}),
    })
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
