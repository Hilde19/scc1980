import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-annahme',
  templateUrl: './start-annahme.component.html',
  styleUrls: ['./start-annahme.component.css']
})
export class StartAnnahmeComponent implements OnInit {
  bild1: string = '/assets/sccwappen.png';
  constructor() { }

  ngOnInit(): void {
  }

}
