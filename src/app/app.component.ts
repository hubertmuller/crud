import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public title:String;
  public imie:String;

  public test(): void {
    console.log('Test');
  }

  constructor() {
    this.title = 'Dzień Dobry';
    this.imie = 'Jan';
  }
}
