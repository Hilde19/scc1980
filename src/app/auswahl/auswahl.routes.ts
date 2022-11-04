import { Routes } from "@angular/router";
import { BarzahlComponent } from "../summe/barzahl/barzahl.component";
import { EcGeraetComponent } from "../summe/ec-geraet/ec-geraet.component";
import { AuswahlComponent } from "./auswahl.component";
import { BierComponent } from "./bier/bier.component";
import { BowleComponent } from "./bowle/bowle.component";
import { CocktailsComponent } from "./cocktails/cocktails.component";
import { EssenComponent } from "./essen/essen.component";
import { KaffeeComponent } from "./essen/kaffee/kaffee.component";
import { KUECHEN_ROUTES } from "./kuechen.routes";
import { KurzeComponent } from "./kurze/kurze.component";
import { MischeOEisComponent } from "./mische-o-eis/mische-o-eis.component";
import { MischeComponent } from "./mische/mische.component";
import { OhnealkgetrOEisComponent } from "./ohnealkgetr-o-eis/ohnealkgetr-o-eis.component";
import { OhnealkgetrComponent } from "./ohnealkgetr/ohnealkgetr.component";
import { SeweciComponent } from "./seweci/seweci.component";
import { SonstigesComponent } from "./sonstiges/sonstiges.component";



export const AUSWAHL_ROUTES: Routes = [
    // { path: '', component: OhnealkgetrComponent},
    { path: 'bier', component: BierComponent},
    { path: 'bowle', component: BowleComponent},
    { path: 'cocktails', component: CocktailsComponent},
    { path: 'kurze', component: KurzeComponent},
    { path: 'mische', component: MischeComponent},
    { path: 'mischeoeis', component: MischeOEisComponent},
    { path: 'ohnealkgetr', component: OhnealkgetrComponent},
    { path: 'ohnealkgetroeis', component: OhnealkgetrOEisComponent},
    { path: 'seweci', component: SeweciComponent},
    { path: 'essen', component: EssenComponent,
        children: KUECHEN_ROUTES},
    // { path: 'kaffee', component: KaffeeComponent},   
    { path: 'sonstiges', component: SonstigesComponent},
    { path: 'barzahl', component: BarzahlComponent},
    { path: 'ec-geraet', component: EcGeraetComponent},
];