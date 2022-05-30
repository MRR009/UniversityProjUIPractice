import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {

  isOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  public onShown(): void { console.log('OnShown triggered!'); }
}
