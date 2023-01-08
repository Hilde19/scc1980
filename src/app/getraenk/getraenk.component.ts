import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestellungService } from '../bestellung.service';

@Component({
  selector: 'app-getraenk',
  templateUrl: './getraenk.component.html',
  styleUrls: ['./getraenk.component.css']
})
export class GetraenkComponent implements OnInit {
  
  @Input() getraenk: string = ''; 
  @Input() preis: string= '';
  @Input() pfand: boolean= false;
  @Input() cssClass: string= '';
  @Input() ausgabekennz: string= '';

  constructor(public bs: BestellungService, private router: Router) { }
  
  onNavigate() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
