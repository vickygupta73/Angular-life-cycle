import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app-life-cycle';

  constructor(){
    console.log('Cons console');
    console.log(this.title);
  }

  ngOnInit(){
    console.log('Init console');
    console.log(this.title);

  }
}
