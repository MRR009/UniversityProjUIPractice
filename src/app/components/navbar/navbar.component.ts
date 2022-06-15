import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

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
