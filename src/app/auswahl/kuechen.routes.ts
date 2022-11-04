import { Routes } from "@angular/router";
import { BockwurstComponent } from "./essen/bockwurst/bockwurst.component";
import { KaffeeComponent } from "./essen/kaffee/kaffee.component";
import { OhnealkgetrComponent } from "./ohnealkgetr/ohnealkgetr.component";




export const KUECHEN_ROUTES: Routes = [
    // { path: '', component: OhnealkgetrComponent},
    { path: 'kaffee', component: KaffeeComponent},
    { path: 'bockwurst', component: BockwurstComponent},

];