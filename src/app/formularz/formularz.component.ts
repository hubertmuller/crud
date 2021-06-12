import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { ListaService, Osoba } from '../lista.service';

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

  public params: Params;
  public czynnosc = 'Dodaj';
  public forma:FormGroup = new FormGroup( {
    imie: new FormControl('', {validators: [], updateOn: "change"}),
    nazwisko: new FormControl('', {validators: [], updateOn: "change"}),
    rok: new FormControl(1978, {validators: [NaszValidator.wymaganyWiek(18,100)], updateOn: "change"}),
    szczepionka: new FormControl(null, {validators: [Validators.required], updateOn: "change"}),
    plec: new FormControl(null, {validators: [Validators.required], updateOn: "change"}),
    zyczenia: new FormGroup({
      a: new FormControl(null, {validators: [], updateOn: "change"}),
      b: new FormControl(null, {validators: [], updateOn: "change"}),
    })
  }); 

  public zapisz() {
    const stanFormy: {[p:string]: AbstractControl} = this.forma.controls;
    const osoba: Osoba = {
      imie: stanFormy.imie.value,
      nazwisko: stanFormy.nazwisko.value,
      plec: stanFormy.plec.value,
      rok: stanFormy.rok.value,
      szczepionka: stanFormy.szczepionka.value,
      zyczenia: {
        a: stanFormy.zyczenia.value.a,
        b: stanFormy.zyczenia.value.b
      }
    };
    this.listaService.zapiszOsobe(osoba).subscribe( () => {
      console.log('Zapisano osobe!');
    })
  }

  constructor(public listaService: ListaService, public route: ActivatedRoute) { 
    this.route.params.subscribe( (params: Params) => {
      this.params = params;
    });
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
