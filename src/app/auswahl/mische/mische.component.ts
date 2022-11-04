import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';

@Component({
  selector: 'app-mische',
  templateUrl: './mische.component.html',
  styleUrls: ['../auswahl.component.css']
})
export class MischeComponent implements OnInit {

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
