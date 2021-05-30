import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-stopka',
  templateUrl: './stopka.component.html',
  styleUrls: ['./stopka.component.scss']
})
export class StopkaComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log('konstruktor');
  }

  ngOnDestroy(): void {
    console.log('do widzenia');
  }

  ngOnInit(): void {
    console.log('dziendobry');
  }
  

}
