import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuswahlComponent } from "./auswahl/auswahl.component";
import { AUSWAHL_ROUTES } from "./auswahl/auswahl.routes";
import { BierComponent } from "./auswahl/bier/bier.component";
import { BowleComponent } from "./auswahl/bowle/bowle.component";
import { CocktailsComponent } from "./auswahl/cocktails/cocktails.component";
import { EssenComponent } from "./auswahl/essen/essen.component";
import { KUECHEN_ROUTES } from "./auswahl/kuechen.routes";
import { KurzeComponent } from "./auswahl/kurze/kurze.component";
import { MischeComponent } from "./auswahl/mische/mische.component";
import { OhnealkgetrComponent } from "./auswahl/ohnealkgetr/ohnealkgetr.component";

import { SeweciComponent } from "./auswahl/seweci/seweci.component";
import { SonstigesComponent } from "./auswahl/sonstiges/sonstiges.component";
import { BestellungComponent } from "./bestellung/bestellung.component";
import { BierAusgabeComponent } from "./bier-ausgabe/bier-ausgabe.component";

import { HomeComponent } from "./home/home.component";
import { KuecheAusgabeComponent } from "./kueche-ausgabe/kueche-ausgabe.component";
import { Mischer01AusgabeComponent } from "./mischer01-ausgabe/mischer01-ausgabe.component";
import { ModAusgabeComponent } from "./mod-ausgabe/mod-ausgabe.component";

import { StartAnnahmeComponent } from "./start-annahme/start-annahme.component";
// import { AUSWAHL_ROUTES } from "./auswahl/auswahl.routes";


import { BarzahlComponent } from "./summe/barzahl/barzahl.component";
import { SummeComponent } from "./summe/summe.component";

const APP_ROUTES: Routes = [
     { path: '', redirectTo: '/home', pathMatch: 'full'},  
     { path: 'home', component: HomeComponent}, 

     { path: 'start_annahme', component: StartAnnahmeComponent,
     children: AUSWAHL_ROUTES },     
     { path: 'bier_ausgabe', component: BierAusgabeComponent}  , 
     { path: 'kueche_ausgabe', component: KuecheAusgabeComponent}  ,  
     { path: 'mischer01_ausgabe', component: Mischer01AusgabeComponent}  , 
     { path: 'mod_ausgabe', component: ModAusgabeComponent}  ,   

];

export const routing = RouterModule.forRoot(APP_ROUTES);