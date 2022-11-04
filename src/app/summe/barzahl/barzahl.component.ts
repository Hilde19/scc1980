import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';


@Component({
  selector: 'app-barzahl',
  templateUrl: './barzahl.component.html',
  styleUrls: ['./barzahl.component.css']
})
export class BarzahlComponent implements OnInit {
  
  // zahl = '';
  rueck = 0;
  rueckstring = '';
  zahlnum = 0;
  summe = 0;
  eurozeichen = '';

  constructor(public bs: BestellungService) { }
  
  ngOnInit(): void {
  }

  // loeZahl(){
    
  //   this.zahl = this.zahl.slice (0 , this.zahl.length - 1);
   
  // }
  // addZahl(za:string){
  //   if(this.zahl == '0' && za == '0'){
  //     this.zahl = this.zahl;
  //   }else if (za == '.' && this.zahl.includes('.')){
  //     this.zahl = this.zahl;
  //   }else   {
  //    this.zahl = this.zahl + za; 
  //   }
    
    
    
  // }

  rueckgeld(){
    this.zahlnum = parseFloat(this.bs.zahl)
    this.summe = parseFloat(this.bs.gesamtsumme)
    this.rueck = parseFloat((this.zahlnum*1 - this.summe*1).toPrecision(6)) 
    if (this.rueck < 0){
      this.rueckstring = 'zu wenig Geld ;-)'}
    else
      {this.rueckstring = this.rueck.toFixed(2)}
      this.eurozeichen = '€';
  }





}
