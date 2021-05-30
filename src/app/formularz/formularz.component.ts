import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularz',
  templateUrl: './formularz.component.html',
  styleUrls: ['./formularz.component.scss']
})
export class FormularzComponent implements OnInit, OnDestroy {

  constructor() {
    console.log('konstruktor');
  }

  ngOnInit(): void {
    console.log('dziendobry');
  }

  ngOnDestroy(): void {
    console.log('do widzenia');
  }

}
