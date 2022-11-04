import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';

@Component({
  selector: 'app-essen',
  templateUrl: './essen.component.html',
  styleUrls: ['../auswahl.component.css']
})
export class EssenComponent implements OnInit {

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
