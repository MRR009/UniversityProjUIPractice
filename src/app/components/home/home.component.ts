import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  styles: [`
    .home-container{
      padding-left: 15px;
      padding-top: 20px;
    };
    .width{
      width:30%;
    }
  `],
  template: `<div class="home-container">
      <sidebar class="width" ></sidebar>
      <app-university></app-university>
    </div>
  `
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
