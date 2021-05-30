import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopkaComponent } from './stopka/stopka.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { ListaComponent } from './lista/lista.component';
import { DetaleComponent } from './detale/detale.component';
import { FormularzComponent } from './formularz/formularz.component';
import { UsunComponent } from './usun/usun.component';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    ListaComponent,
    DetaleComponent,
    FormularzComponent,
    UsunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
