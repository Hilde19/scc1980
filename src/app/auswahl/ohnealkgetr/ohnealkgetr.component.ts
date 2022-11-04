import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';

@Component({
  selector: 'app-ohnealkgetr',
  templateUrl: './ohnealkgetr.component.html',
  styleUrls: ['../auswahl.component.css']
})
export class OhnealkgetrComponent implements OnInit {

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
