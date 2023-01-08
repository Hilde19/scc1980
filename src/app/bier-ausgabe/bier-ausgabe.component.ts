import { Component, OnInit } from '@angular/core';
import { Expense } from '../models/expense';
import { AusgabenService } from '../services/ausgaben.service';



@Component({
  selector: 'app-bier-ausgabe',
  templateUrl: './bier-ausgabe.component.html',
  styleUrls: ['./bier-ausgabe.component.css']
})

export class BierAusgabeComponent implements OnInit {
    expenses: Expense[]; 
    expense: Expense = new Expense();
    bestellung1: Array<Expense> = [];
    bestellung2: Array<Expense> = [];
    bestellung3: Array<Expense> = [];
    s_bestellung = 0;
  
    constructor(public _ausgabenService: AusgabenService) { 
      this.expenses = [];
    }
    ngOnInit(): void {
      this._ausgabenService.getExpenses().subscribe(
        data => {
          this.expenses = data;
          let bestellid1 = data[0].bestellnr;
          let bestellid2 = '';
          let bestellid3 = '';
          let s_bestell = 0;
          data.forEach(element => {
           if(element.ausgabekennz === 'B'){ 
            if (s_bestell === 0){
              bestellid1 = element.bestellnr
              s_bestell = 1;
            }
            if (element.bestellnr === bestellid1)
            {
             this.bestellung1.push(element);
            }
            if (element.bestellnr != bestellid1 && bestellid2 === '')
            {
              bestellid2 = element.bestellnr;
              this.bestellung2.push(element);
            } else if (element.bestellnr === bestellid2){
              this.bestellung2.push(element);
            } 
            if (element.bestellnr != bestellid1 && 
                element.bestellnr != bestellid2 &&
                bestellid3 === '')
            {
              bestellid3 = element.bestellnr;
              this.bestellung3.push(element);
            } else if (element.bestellnr === bestellid3){
              this.bestellung3.push(element);
            }
           }
          })
        } 
      )  
    }
  
    deleteExpense(id: number) {
        this._ausgabenService.deleteExpense(id).subscribe()
    }
  
    saveExpense(expense: string, amount: number, anzahl:number, bestellnr:string, 
                zahlart:string, ak:string, annehmer: string) {
        this.expenses.forEach(expense => {
        console.log(expense);
      });  
  
      this.expense.amount = amount;
      this.expense.expense = expense;
      this.expense.anzahl = anzahl;
      this.expense.bestellnr = bestellnr;
      this.expense.zahlart = zahlart;
      this.expense.description = 'erledigt';
      this.expense.ausgabekennz = ak;
      this.expense.annehmer =annehmer;
        
      this._ausgabenService.saveExpense2(this.expense).subscribe(
        data => {
        console.log('response', data);
        }
      )
    }
      
    erledigt01(){
      for (let j = 0; j < this.bestellung1.length; j++){
        this.deleteExpense(this.bestellung1[j].id);
        this.saveExpense(this.bestellung1[j].expense, this.bestellung1[j].amount, 
                         this.bestellung1[j].anzahl, this.bestellung1[j].bestellnr, 
                         this.bestellung1[j].zahlart, this.bestellung1[j].ausgabekennz,
                         this.bestellung1[j].annehmer);
      }
      this.bestellung1.length = 0;
      this.bestellung2.length = 0;
      this.bestellung3.length = 0;
      location.reload();
    }
    erledigt02(){
      for (let j = 0; j < this.bestellung2.length; j++){     
        this.deleteExpense(this.bestellung2[j].id);
        this.saveExpense(this.bestellung2[j].expense, this.bestellung2[j].amount, 
                         this.bestellung2[j].anzahl, this.bestellung2[j].bestellnr, 
                         this.bestellung2[j].zahlart, this.bestellung2[j].ausgabekennz, 
                         this.bestellung2[j].annehmer);
      }
      this.bestellung1.length = 0;
      this.bestellung2.length = 0;
      this.bestellung3.length = 0;
      location.reload();
    }
    erledigt03(){
      for (let j = 0; j < this.bestellung3.length; j++){    
        this.deleteExpense(this.bestellung3[j].id);
        this.saveExpense(this.bestellung3[j].expense, this.bestellung3[j].amount, 
                         this.bestellung3[j].anzahl, this.bestellung3[j].bestellnr, 
                         this.bestellung3[j].zahlart, this.bestellung3[j].ausgabekennz, 
                         this.bestellung3[j].annehmer);
      }
      this.bestellung1.length = 0;
      this.bestellung2.length = 0;
      this.bestellung3.length = 0;
      location.reload();
    }
  }
  