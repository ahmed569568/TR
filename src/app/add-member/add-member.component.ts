import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreService } from '../store.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAddMemberDialogComponent } from '../confirm-add-member-dialog/confirm-add-member-dialog.component';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss'],
})
export class AddMemberComponent implements OnInit {
  customStyle = {
    selectButton: {
      'background-color': '#39b54a',
      color: '#fff',
      'border-radius': '10px',
    },
    clearButton: {
      'background-color': '#FFF',
      color: '#000',
      'margin-left': '10px',
      'border-radius': '10px',
    },
    layout: {
      'background-color': '#006d33',
      'border-radius': '10px',
      'width': '300px',
      color: '#FFF',
      'font-size': '15px',
      'padding-top': '5px',
    },
    previewPanel: {
      'background-color': '#006d33',
      'border-radius': '10px',
    },
  };
  addMemberForm = new FormGroup({
    name: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    homephone: new FormControl('', Validators.required),
    mobilephone: new FormControl('', Validators.required),
    account1: new FormControl('', Validators.required),
    account2: new FormControl(''),
    account3: new FormControl(''),
    account4: new FormControl(''),
    account5: new FormControl(''),
  });
  constructor(
    private store: StoreService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}
  onSubmit(x) {
    const dialogRef = this.dialog.open(ConfirmAddMemberDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((result) => {
          return this.store.addMember(x);
        })
      )
      .subscribe(
        () => this.router.navigate(['/members']),
        (err) => console.log(err)
      );
  }

}
