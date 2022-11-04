import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';

@Component({
  selector: 'app-bowle',
  templateUrl: './bowle.component.html',
  styleUrls: ['../auswahl.component.css']
})
export class BowleComponent implements OnInit {

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
