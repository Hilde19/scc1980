import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';

@Component({
  selector: 'app-seweci',
  templateUrl: './seweci.component.html',
  styleUrls: ['../auswahl.component.css']
})
export class SeweciComponent implements OnInit {

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
