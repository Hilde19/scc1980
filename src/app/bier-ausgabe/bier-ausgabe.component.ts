import { Component, Input, OnInit } from '@angular/core';
import { Expense } from '../models/expense';
import { AusgabenService } from '../services/ausgaben.service';



@Component({
  selector: 'app-bier-ausgabe',
  templateUrl: './bier-ausgabe.component.html',
  styleUrls: ['./bier-ausgabe.component.css']
})

export class BierAusgabeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}