import { Injectable, Output } from '@angular/core';
import { SonstigesComponent } from './auswahl/sonstiges/sonstiges.component';
import { Headers} from '@angular/http'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Expense } from './models/expense';
import { Observable } from 'rxjs';
import { AusgabenService } from './services/ausgaben.service';




export const config = {
  variable1: 0,
  variable2: 'bla'
};

@Injectable({
  providedIn: 'root'
})
export class BestellungService {


 
  constructor(private _httpClient: HttpClient, 
          private _ausgabenService: AusgabenService) {}

  i = '';
  g = '';
  // Index um im Array zu gucken, ob es das aktuell eingegebene Getränk schon gibt
  x = 0;
 
  zahl = '';
  zahlnum = 0;
  zahlausgabe = '0.00';
  
  expenses: Expense[] = [];
  expense: Expense = new Expense();
  
  
  //grundsaetzliche Felder
  getraenk: Array<string> = [];
  anzahl: Array<string> = [];
  g_preis: Array<string> = [];
  e_preis: Array<string> = [];
  pfand: Array<string> = [];



  

  preis_sonst = '';
  preis_sonst_num = 0;

  fehler = '';
  fehler2 = '';

  anzahl_sonst = '';
  preis = '';
  getraenk_sonst = 'Sonstiges';
  pfand_sonst = false;
  pfand_kz= '0';
  pfand_antwort ='';

  
  anzahl_num_uebertragen = 0;

  
  g_preis_num_uebertragen = 0;
  

  e_pr_num = 0;
  g_pr_num = 0;
  g_pr_num2 = 0;
  g_pr_num3 = 0;
  anz = 0;
  ind = 0;
  bestellnr_uebertragen = 0;
  bestellnr_uebertragen_string = '';

  summe = 0;
  gesamtsumme = '';
  minus_pfand = '';
  min_pf = 0;
  plus_pfand = '';
  pl_pf = 0;
  anz_minus_pfand = 0;
  anz_plus_pfand = 0;
  min_pfandbetrag = '-2.00';
  pl_pfandbetrag = '2.00';

  bechzur = 'Becher zurueck';
  becher = 'Becherpfand';
  
  pfandchip = '';
  pfandchiprichtung = '';
  pfandchipanzahl = 0;
  pfandchipschrift ='';

  




  addGetraenk(getr:string,epr:string, pf:boolean){  

    this.x = this.getraenk.indexOf(getr);
    if(this.x >= 0 && getr != 'Sonstiges'){
      this.anz = parseFloat(this.anzahl[this.x]);
      this.anz = this.anz + 1;
      this.anzahl[this.x] = this.anz.toString();
      this.g_pr_num = parseFloat(epr);
      this.g_pr_num2 = parseFloat(this.g_preis[this.x]);
      this.g_pr_num3 = parseFloat((this.g_pr_num*1 + this.g_pr_num2*1).toPrecision(6))
      this.g_preis[this.x] = this.g_pr_num3.toFixed(2);
      this.summe = parseFloat((this.summe*1 + this.g_pr_num*1).toPrecision(6));
      this.gesamtsumme = this.summe.toFixed(2) 
      this.e_preis[this.x] = this.g_pr_num.toFixed(2);
      
      if (pf == true) {
      this.pfanddazu();
      } 
    } else {   
      this.e_preis.push(epr);    
      this.getraenk.push(getr);
      this.g_preis.push(epr);
      this.anzahl.push('1');
      this.g_pr_num = parseFloat(epr);
      this.summe = parseFloat((this.summe*1 + this.g_pr_num*1).toPrecision(6));
      this.gesamtsumme = this.summe.toFixed(2);
      if (pf == true) {
        this.pfanddazu();
        this.pfand.push('1');
      } else {
      this.pfand.push('0');
      }  
    }
  }
  
  loeschBest(){

    this.anzahl.length = 0;
    this.getraenk.length = 0;
    this.g_preis.length = 0;
    this.e_preis.length = 0;
    this.pfand.length = 0;
    this.gesamtsumme = '0';
    this.summe = 0;
    this.anz_minus_pfand = 0;
    this.anz_plus_pfand = 0;
    this.min_pf = 0;
    this.pl_pf = 0;
    this.betraegezuruecksetzen();
    this.preis_sonst = '0';
    this.pfand_antwort = '';
    this.pfandchipschrift = '';
    this.pfandchip = '';
    this.pfandchipanzahl = 0;
    this.pfandchiprichtung = '';
    
   

  }

  minusGetr(i:number){
    this.anz = parseFloat(this.anzahl[i]);
   
    if(this.anz <= 1){
    
    // this.g = this.getraenk[i];
    this.g_pr_num = parseFloat(this.g_preis[i]);
    this.summe = parseFloat((this.summe*1 - this.g_pr_num*1).toPrecision(6));
    this.gesamtsumme = this.summe.toFixed(2)
	  this.anzahl.splice (i ,1);
    // this.getraenk[i] = '';
    // this.preis[i] = 0;
    // das Element Cola aus dem Array entfernen
    this.getraenk.splice (i, 1);
    this.g_preis.splice (i, 1); 
    this.e_preis.splice (i, 1);

      if (this.pfand[i] == '1') {
        this.pfanddazu_minus();
      }
    this.pfand.splice (i,1);
    }
    else {
      this.anz = this.anz - 1;
      this.anzahl[i] = this.anz.toString();


      this.g_pr_num = parseFloat(this.g_preis[i]);
      this.e_pr_num = parseFloat(this.e_preis[i]);
      this.g_pr_num = parseFloat((this.g_pr_num*1 - this.e_pr_num*1).toPrecision(6));

      this.g_preis[i] = this.g_pr_num.toFixed(2)
      this.summe = parseFloat((this.summe*1 - this.e_pr_num*1).toPrecision(6));
      this.gesamtsumme = this.summe.toFixed(2); 

      if (this.pfand[i] == '1') {
        this.pfanddazu_minus();
      }
    
      
    }
  
  }

  plusGetr(i:number){
    this.anz = parseFloat(this.anzahl[i]);
   
    
    this.anz = this.anz + 1;
    this.anzahl[i] = this.anz.toString();


    this.g_pr_num = parseFloat(this.g_preis[i]);
    this.e_pr_num = parseFloat(this.e_preis[i]);
    this.g_pr_num = this.g_pr_num + this.e_pr_num;

    this.g_preis[i] = this.g_pr_num.toFixed(2)
    this.summe = parseFloat((this.summe*1 + this.e_pr_num*1).toPrecision(6));
    this.gesamtsumme = this.summe.toFixed(2);  
    
    if (this.pfand[i] == '1') {
      this.pfanddazu();
    }
   
  } 
  
  pfandabzug(){
    this.summe = parseFloat((this.summe*1 - 2*1).toPrecision(6));
    this.gesamtsumme = this.summe.toFixed(2);  
   
    this.min_pf = parseFloat((this.min_pf*1 - 2*1).toPrecision(6));
    this.minus_pfand = this.min_pf.toFixed(2);

    this.anz_minus_pfand = this.anz_minus_pfand + 1;

    // fuer barzahl: betragfeld zurücksetzen
    this.betraegezuruecksetzen();
  }
  
  pfanddazu(){
    this.anz_plus_pfand = this.anz_plus_pfand + 1;
    
    this.pl_pf = parseFloat((this.pl_pf*1 + 2*1).toPrecision(6));
    this.plus_pfand = this.pl_pf.toFixed(2);

    this.summe = parseFloat((this.summe*1 + 2*1).toPrecision(6));
    this.gesamtsumme = this.summe.toFixed(2);
    // fuer barzahl: betragfeld zurücksetzen
    this.betraegezuruecksetzen();
  }

  pfandabzug_minus(){
    this.summe = parseFloat((this.summe*1 + 2*1).toPrecision(6));
    this.gesamtsumme = this.summe.toFixed(2);  
   
    this.min_pf = parseFloat((this.min_pf*1 + 2*1).toPrecision(6));
    this.minus_pfand = this.min_pf.toFixed(2);

    this.anz_minus_pfand = this.anz_minus_pfand - 1;
    // fuer barzahl: betragfeld zurücksetzen
    this.betraegezuruecksetzen();
  }

  pfanddazu_minus(){
    this.anz_plus_pfand = this.anz_plus_pfand - 1;
    
    this.pl_pf = parseFloat((this.pl_pf*1 - 2*1).toPrecision(6));
    this.plus_pfand = this.pl_pf.toFixed(2);

    this.summe = parseFloat((this.summe*1 - 2*1).toPrecision(6));
    this.gesamtsumme = this.summe.toFixed(2);
    // fuer barzahl: betragfeld zurücksetzen
    this.betraegezuruecksetzen();
  }

  
  loeZahl(){
    
    this.betraegezuruecksetzen();
   
  }

  addZahl(za:string, comp:string){
    // if(this.zahl == '0' && za == '0'){
    //   this.zahl = this.zahl;
    // }else if (za == '.' && this.zahl.includes('.')){
    //   this.zahl = this.zahl;
    // } else if (comp == 'sonstiges' && this.zahl.length == 1 && za != '.'){
    //     this.zahl = this.zahl;
    // }else {
    //  this.zahl = this.zahl + za; 
    // }
    if (this.zahl.length == 3 && comp == 'sonstiges'){
      this.zahl = this.zahl
    } else if(this.zahl.length == 2 && comp == 'sonstiges' && za == '00'){
      this.zahl = this.zahl
    } else if(this.zahl.length == 5){
      this.zahl = this.zahl
    } else if(this.zahl.length == 4 && za == '00'){
      this.zahl = this.zahl
    } else {
      this.zahl = this.zahl + za
    }

    this.zahlnum = parseFloat(this.zahl);
    this.zahlnum = parseFloat((this.zahlnum/100).toPrecision(6));
    if(this.zahlnum != 0){
    this.zahlausgabe = this.zahlnum.toFixed(2);
    } else {
      this.zahlausgabe = '0.00';
      this.zahl = '';
    }
  } 
  // Funktionen für SonstigesComponent
  pfandja() {
    this.pfand_kz = '1';
    this.pfand_sonst = true;
    this.fehler2 = '';
    this.pfand_antwort = 'JA';
  }

  pfandnein() {
    this.pfand_kz = '1';
    this.pfand_sonst = false;
    this.fehler2 = '';
    this.pfand_antwort = 'NEIN';
  }

  getraenkio() {
    this.preis_sonst = this.zahlausgabe; 
    this.anzahl_sonst = '1';
    
    if(this.preis_sonst != ''){
      this.preis_sonst_num = parseFloat(this.preis_sonst);
      this.preis_sonst = this.preis_sonst_num.toFixed(2);
    }
    
    if(this.preis_sonst != '0.00' && this.pfand_kz != '0'){
      this.addGetraenk(this.getraenk_sonst,this.preis_sonst,this.pfand_sonst)
      this.pfand_kz= '0';
      this.preis_sonst = '';
      this.betraegezuruecksetzen();
      this.fehler = '';
      this.fehler2 = '';
      this.pfand_antwort = '';
    } else {
    
    if (this.preis_sonst == '0.00') {
      this.fehler = 'Fehler: Preis eingeben'
   
    }
    if(this.pfand_kz == '0'){
      this.fehler2 = 'Fehler: Pfand ja oder nein?'
    }
    }

  }



  uebergeben(zahlart: string){
    this.pfandchipsberechnung();
    this.betraegezuruecksetzen();
    this.x = this.getraenk.length
    const currentDate = new Date()
    const timestamp = currentDate. getTime()
    this.bestellnr_uebertragen = timestamp;
    this.bestellnr_uebertragen_string = this.bestellnr_uebertragen.toFixed(0);
     
    
    for (let j = 0; j < this.getraenk.length; j++) {


      
      this.expense.expense = this.getraenk[j];
      this.anzahl_num_uebertragen = parseFloat(this.anzahl[j]);
      this.expense.anzahl = this.anzahl_num_uebertragen;
      this.g_preis_num_uebertragen = parseFloat(this.g_preis[j]);
      this.expense.amount = this.g_preis_num_uebertragen;
      this.expense.description = 'offen';
      
      this.expense.bestellnr =  this.bestellnr_uebertragen_string;
      this.expense.zahlart = zahlart;
      


      // this.saveExpense();
      this._ausgabenService.saveExpense(this.expense).subscribe();
      
      
     
    }
    // this.expense.amount = 75;
    // this.expense.description = 'weiß nicht';
    // this.expense.expense = 'Lillet';
    // alert(this.expense.description)
    // this._ausgabenService.saveExpense(this.expense).subscribe();

    
    this.expenses.length = 0;
 
    
  }

  
  // saveExpense(expense: Expense): Observable<Expense> {
  //   return this._httpClient.post<Expense>(this.getUrl, expense) 
  // }

  pfandchipsberechnung(){
    
    this.pfandchipanzahl = this.anz_plus_pfand - this.anz_minus_pfand;
    
    if (this.pfandchipanzahl < 0) 
    {  
      this.pfandchipschrift='Pfandchips';
      this.pfandchiprichtung='einfordern';
      this.pfandchipanzahl = this.pfandchipanzahl * -1;
      this.pfandchip = this.pfandchipanzahl.toFixed(0);
    } else if (this.pfandchipanzahl > 0) 
    {  
      this.pfandchipschrift='Pfandchips';
      this.pfandchiprichtung='rausgeben';
      this.pfandchip = this.pfandchipanzahl.toFixed(0);
    } 
    
    if (this.pfandchipanzahl == 0) 
    {  
      this.pfandchipschrift='nix pfandchips';
      this.pfandchiprichtung='';
      this.pfandchip = '';
    }

  }

  betraegezuruecksetzen(){
    this.zahl = '';
    this.zahlnum = 0;
    this.zahlausgabe = '0.00';
  }
  


}
