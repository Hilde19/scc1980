import { BinaryOperator } from '@angular/compiler';
import { Component, Input, OnInit, Output } from '@angular/core';
import { BestellungService } from '../bestellung.service';

@Component({
  selector: 'app-auswahl',
  templateUrl: './auswahl.component.html',
  styleUrls: ['./auswahl.component.css']
})
export class AuswahlComponent implements OnInit {
  @Input() testtext: string = '';
  @Input() fenster: string = '';
  essenliste = [''];
  x : number = 0;
 
  constructor(public bs: BestellungService) { }

  ngOnInit(): void {
  }
  
  // buttonClicked() {
    
  //     this.essenliste [this.x] = 'gyros';
  //     this.x = this.x + 1;
  //   // alert('Hallo');
    
  // }

  // buttonWeinClicked() {
    
  //   this.essenliste [this.x] = 'Wein';
  //   this.x = this.x + 1;
  // // alert('Hallo');
  
  // }
  // buttonSektClicked() {
    
  //   this.essenliste [this.x] = 'Sekt';
  //   this.x = this.x + 1;
  // // alert('Hallo');
  
  // }
  // buttonBierClicked() {
    
  // this.essenliste [this.x] = 'Bier';
  // this.x = this.x + 1;
// alert('Hallo');

  // }
}
