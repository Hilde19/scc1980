import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BestellungService } from '../bestellung.service';

@Component({
  selector: 'app-getraenk-inaktiv',
  templateUrl: './getraenk-inaktiv.component.html',
  styleUrls: ['./getraenk-inaktiv.component.css']
})
export class GetraenkInaktivComponent implements OnInit {
  
  @Input() getraenk: string = ''; 
  @Input() cssClass: string= '';

  constructor(public bs: BestellungService, private router: Router) { }
  
  onNavigate() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }

}
