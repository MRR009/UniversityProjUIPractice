import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {

  isOpened = false;

  constructor(
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  public onShown(): void { console.log('OnShown triggered!'); }

  // onclickLogin(){
  //   this.router.navigateByUrl("/login")
  // }
}
