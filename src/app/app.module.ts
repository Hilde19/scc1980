import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { AuswahlComponent } from './auswahl/auswahl.component';
import { SummeComponent } from './summe/summe.component';

import { GetraenkComponent } from './getraenk/getraenk.component';
import { BestellungComponent } from './bestellung/bestellung.component';
import { routing } from './app.routing';
import { BarzahlComponent } from './summe/barzahl/barzahl.component';
import { BierComponent } from './auswahl/bier/bier.component';
import { KurzeComponent } from './auswahl/kurze/kurze.component';
import { OhnealkgetrComponent } from './auswahl/ohnealkgetr/ohnealkgetr.component';
import { MischeComponent } from './auswahl/mische/mische.component';
import { CocktailsComponent } from './auswahl/cocktails/cocktails.component';
import { BowleComponent } from './auswahl/bowle/bowle.component';
import { SeweciComponent } from './auswahl/seweci/seweci.component';
import { EssenComponent } from './auswahl/essen/essen.component';
import { SonstigesComponent } from './auswahl/sonstiges/sonstiges.component';
import { StartAnnahmeComponent } from './start-annahme/start-annahme.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { BierAusgabeComponent } from './bier-ausgabe/bier-ausgabe.component';

import { FormsModule } from '@angular/forms';
import { KaffeeComponent } from './auswahl/essen/kaffee/kaffee.component';
import { BockwurstComponent } from './auswahl/essen/bockwurst/bockwurst.component';
import { MischeOEisComponent } from './auswahl/mische-o-eis/mische-o-eis.component';
import { OhnealkgetrOEisComponent } from './auswahl/ohnealkgetr-o-eis/ohnealkgetr-o-eis.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GetraenkInaktivComponent } from './getraenk-inaktiv/getraenk-inaktiv.component';
import { EcGeraetComponent } from './summe/ec-geraet/ec-geraet.component';


@NgModule({
  declarations: [
    AppComponent,
    AuswahlComponent,
    SummeComponent,
    GetraenkComponent,
    BestellungComponent,
    HomeComponent,
    BarzahlComponent,
    BierComponent,
    KurzeComponent,
    OhnealkgetrComponent,
    MischeComponent,
    CocktailsComponent,
    BowleComponent,
    SeweciComponent,
    EssenComponent,
    SonstigesComponent,
    StartAnnahmeComponent,
    BierAusgabeComponent,
    KaffeeComponent,
    BockwurstComponent,
    MischeOEisComponent,
    OhnealkgetrOEisComponent,
    GetraenkInaktivComponent,
    EcGeraetComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
