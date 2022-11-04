import { Component, OnInit } from '@angular/core';
import { BestellungService } from 'src/app/bestellung.service';

@Component({
  selector: 'app-kurze',
  templateUrl: './kurze.component.html',
  styleUrls: ['../auswahl.component.css']
})
export class KurzeComponent implements OnInit {

  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
