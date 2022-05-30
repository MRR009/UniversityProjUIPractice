import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  template: `<filters></filters>
    <filters></filters>
    `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
