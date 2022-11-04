import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BestellungService } from '../bestellung.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [BestellungService]
})
export class HomeComponent implements OnInit {
  result: string | undefined;

  
  constructor(public bs: BestellungService) { }
  
  // onsubmit(testfeld: string) {
  //     this.bs.sendData({testfeld: testfeld}).subscribe(
  //       data => console.log(data),
  //       error => console.log(error)
  //     )
  // }


  ngOnInit(): void {
    

    //  this.client.get('/localhost:8080')
    //  .subscribe(data => {
    //   this.result = (data as any)['name'];
    //   // this.result = data['name'];
    //   console.log(data);
    //  }); 
    
    

  }

}
