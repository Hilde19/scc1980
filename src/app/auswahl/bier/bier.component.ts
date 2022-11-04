import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';

@Component({
  selector: 'app-bier',
  templateUrl: './bier.component.html',
  styleUrls: ['../auswahl.component.css']
})
export class BierComponent implements OnInit {

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
