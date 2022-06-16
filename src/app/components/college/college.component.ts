import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CollegeService } from 'src/app/service/college.service';
import { StreamService } from 'src/app/service/stream.service';
import { UniversityService } from 'src/app/service/university.service';
import { filteredColleges, filterTriggered } from 'src/app/store/colleges.selectors';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.scss']
})
export class CollegeComponent implements OnInit {

  colleges$ : Observable<any> | undefined;
  filteredColleges$ : Observable<any> | undefined;
  stateCount$: Observable<any> | undefined;

  filteredColleges :any[] = []
  colleges : any[]= []
  stateCount: number = 0;
  displayStyle = "none";

  animal: string | undefined;
  name: string | undefined;

  constructor(
    private universityService: UniversityService,
    private collegeService: CollegeService,
    private streamService: StreamService,
    private route: ActivatedRoute,
    private store: Store,
    public dialog: MatDialog

  ) { 
    this.getColleges();
    this.filteredColleges$ = this.store.select(filteredColleges)
    this.store.select(filterTriggered).subscribe(data => this.stateCount = data)
    //console.log(this.stateCount)

  }

  ngOnInit(): void {
    
  }

  getColleges(){
    this.colleges$ = this.collegeService.getAllColleges()
  }

  openPopup() {
    const dialogRef = this.dialog.open(LoginFormComponent, {
      width: '850px',
      height: '550px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  
  }

  

}
