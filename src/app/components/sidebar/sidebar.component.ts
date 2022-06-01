import { Component, OnInit } from '@angular/core';
import { StreamService } from 'src/app/service/stream.service';
import { UniversityService } from 'src/app/service/university.service';

@Component({
  selector: 'sidebar',
  template: `<filters></filters>
    `,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  allUnip: any
  allStreamsp :any

  constructor() { 
  }

  ngOnInit(): void {
  }

}
