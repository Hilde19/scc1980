import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';


@Component({
  selector: 'app-sonstiges',
  templateUrl: './sonstiges.component.html',
  styleUrls: ['./sonstiges.component.css'],
})
export class SonstigesComponent implements OnInit {


  
  // zahl = '';
  // rueck = 0;
  // rueckstring = '';
  zahlnum = 0;
  summe = 0;
  preis_sonst = '';
  preis_sonst_num = 0;

  fehler = '';
  fehler2 = '';

  anzahl = '';
  preis = '';
  getraenk = 'Sonstiges';
  pfand = false;
  pfand_kz= '0';

  constructor(public bs: BestellungService) { }
  
  ngOnInit(): void {
  }


  
  
}

 

