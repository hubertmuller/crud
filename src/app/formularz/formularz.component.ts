import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  public forma:FormGroup = new FormGroup( {
    imie: new FormControl('Adam', {validators: [], updateOn: "change"}),
    nazwisko: new FormControl('Kowalski', {validators: [], updateOn: "change"})
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
