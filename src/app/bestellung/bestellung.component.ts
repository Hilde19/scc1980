import { Component, OnInit } from '@angular/core';
import { BestellungService } from '../bestellung.service';

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.css']
})
export class BestellungComponent implements OnInit {
  
  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }

}
