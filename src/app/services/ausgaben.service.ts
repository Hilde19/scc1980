import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Expense } from '../models/expense';


@Injectable({
  providedIn: 'root'
})
export class AusgabenService {
  
  private getUrl: string = "http://localhost:8080/api/v1/expenses";
  private getUrl2: string = "http://localhost:8080/api/v2/expenses";

  constructor(private _httpClient: HttpClient) { }

  getExpenses(): Observable<Expense[]> {
    return this._httpClient.get<Expense[]>(this.getUrl).pipe(
      map(response => response)
    )
  }

  saveExpense(expense: Expense): Observable<Expense> {
    return this._httpClient.post<Expense>(this.getUrl, expense) 
  }

  deleteExpense(id: number): Observable<any> {
    return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'});
  }

  saveExpense2(expense: Expense): Observable<Expense> {
    return this._httpClient.post<Expense>(this.getUrl2, expense); 
  }


}
