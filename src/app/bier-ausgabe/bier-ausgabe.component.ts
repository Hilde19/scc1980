import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense';
import { AusgabenService } from '../services/ausgaben.service';



@Component({
  selector: 'app-bier-ausgabe',
  templateUrl: './bier-ausgabe.component.html',
  styleUrls: ['./bier-ausgabe.component.css']
})

export class BierAusgabeComponent implements OnInit {
  


  filter = ['Diesel','Alster','Pils vom Fass'];

  
  bestellnr_merk = 0;

  expenses: Expense[] = [];
  expense: Expense = new Expense();
  e = '';
  i = 0;
  a = 0;

  constructor(public _ausgabenService: AusgabenService) { 
    
  }

  ngOnInit(): void {
    this._ausgabenService.getExpenses().subscribe(
      data => this.expenses = data
    )
  }

  bierfilter(e: string): boolean {
        return this.filter.includes(e);
  }

  deleteExpense(id: number) {
      this._ausgabenService.deleteExpense(id).subscribe()
  }

  
  saveExpense(expense: string, amount: number, anzahl:number, bestellnr:string, zahlart:string) {
      this.expense.amount = amount
      this.expense.expense = expense
      this.expense.anzahl = anzahl
      this.expense.bestellnr = bestellnr
      this.expense.zahlart = zahlart
      this.expense.description = 'erledigt'

      this._ausgabenService.saveExpense2(this.expense).subscribe(
        data => {
        console.log('response', data);
        }
      )
      location.reload(); 
    }

}


