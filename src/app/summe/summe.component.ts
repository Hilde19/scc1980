import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestellungService } from '../bestellung.service';

import { AusgabenService } from '../services/ausgaben.service';

@Component({
  selector: 'app-summe',
  templateUrl: './summe.component.html',
  styleUrls: ['./summe.component.css']
})
export class SummeComponent implements OnInit {
  @Input() annehmer: string = '3';
 

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }


}
