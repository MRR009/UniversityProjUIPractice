import { Injectable } from '@angular/core';
import { DialogService } from '@ngneat/dialog';
import { HotToastService } from '@ngneat/hot-toast';
import { ComponentStore } from '@ngrx/component-store';
import { EMPTY, Observable } from 'rxjs';
import { catchError, concatMap, filter, switchMap, tap } from 'rxjs/operators';
import { StreamService } from '../service/stream.service';
import { UniversityService } from '../service/university.service';
import {College} from '../entity/college.entity'


export interface CollegesState {
  colleges: College[];
  streamCode: String;
}

@Injectable()
export class CollegesStore extends ComponentStore<CollegesState> {

    selectedStrmCode : any;

  constructor(
    private universityService: UniversityService,
    private streamService: StreamService,
    private toast: HotToastService,
    private dialog: DialogService
  ) {
    super({
      colleges: [],
      streamCode: ""
    });

    // this.fetchColleges();
  }

  public ngOnInit(): void {
        this.streamService.currentStrmCode.subscribe(strmcode => {
            this.selectedStrmCode = strmcode});
    }

    getStreamCode(){
        console.log(this.selectedStrmCode)
    }

   filteredContacts$: Observable<College[]> = this.select(
    ({ colleges, streamCode }) =>
      colleges.filter((c) =>
        c.collegeCode.toLowerCase().includes("CCS")
      )
  );

//    setColleges = this.updater((state, colleges: College[]) => ({
//     ...state,
//     colleges,
//   }));

//    fetchColleges = this.effect((trigger$) =>
//     trigger$.pipe(
//       switchMap(() =>
//         this.streamService.getCollegesWithStream("AE").pipe(
//           this.toast.observe({
//             loading: 'Fetching...',
//             success: 'Contacts fetched!',
//             error: 'Could not fetch.',
//           }),
//           tap((colleges: College[]) => {
//             this.setColleges(colleges);
//           }),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

//    showAddDialog = this.effect((trigger$) =>
//     trigger$.pipe(
//       switchMap(() => this.dialog.open(AddContactComponent).afterClosed$),
//       filter((contact) => !!contact),
//       tap((contact) => {
//         this.addContact(contact);
//       })
//     )
//   );

//    addContact = this.effect<College>((contact$) =>
//     contact$.pipe(
//       concatMap((contact) =>
//         this..addContact(contact).pipe(
//           tap(() => this.fetchContacts()),
//           this.toast.observe({
//             loading: 'Adding contact...',
//             success: 'Contact added!',
//             error: 'Could not add.',
//           }),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );

//    deleteContact = this.effect<Contact>((contact$) =>
//     contact$.pipe(
//       concatMap((contact) =>
//         this.contactsService.deleteContact(contact).pipe(
//           this.toast.observe({
//             loading: 'Deleting contact...',
//             success: 'Contact deleted!',
//             error: 'Could not delete.',
//           }),
//           tap(() => this.fetchContacts()),
//           catchError(() => EMPTY)
//         )
//       )
//     )
//   );
}