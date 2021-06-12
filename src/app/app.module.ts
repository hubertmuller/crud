import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StopkaComponent } from './stopka/stopka.component';
import { NaglowekComponent } from './naglowek/naglowek.component';
import { ListaComponent } from './lista/lista.component';
import { DetaleComponent, SzczepionkaPipe } from './detale/detale.component';
import { FormularzComponent } from './formularz/formularz.component';
import { UsunComponent } from './usun/usun.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EdycjaComponent } from './edycja/edycja.component';

@NgModule({
  declarations: [
    AppComponent,
    StopkaComponent,
    NaglowekComponent,
    ListaComponent,
    DetaleComponent,
    FormularzComponent,
    UsunComponent,
    EdycjaComponent,
    SzczepionkaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
