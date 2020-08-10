import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditMemberDialogComponent } from '../edit-member-dialog/edit-member-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { StoreService } from '../store.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss'],
})
export class MembersComponent implements OnInit {
  members;
  p = 1;
  loaded;
  password = '1234';
  constructor(public dialog: MatDialog, private store: StoreService) {}

  ngOnInit(): void {
    this.getMainDataAndCurrentDept().subscribe((x) => {
      this.members = x;
    });
  }
  getMainDataAndCurrentDept() {
    return this.store.observable$.pipe(map((x) => this.convert(x)));
  }
  convert(x) {
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push({ ...x[i]['main-data'], ...x[i]['depts']['current-depts'] });
      arr[i].index = x[i].index;
    }
    return arr;
  }

  editDialog(x: string | number) {
    this.loaded = this.members.filter((y) => {
      return y.index == x;
    })[0];
    console.log(this.loaded);
    const dialogRef = this.dialog.open(EditMemberDialogComponent, {
      data: { data: this.loaded },
      height: '450px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((result) => {
          if (result) {
            return this.store.editMember(x, result);
          }
        })
      )
      .subscribe(
        () => console.log('done'),
        (err) => console.log(err)
      );
  }
  /*   addDialog() {
    const index2 = this.members[this.members.length - 1].index;
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {
      height: '450px'

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        members.push(result);
        members[index2 + 1].index = index2 + 1;
        this.p = this.members.length / 10;
      }
    });
  } */

  deleteDialog(x) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { data: x },
    });
    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((result) => {
          if (result) {
            const dialogRef2 = this.dialog.open(PasswordDialogComponent, {
              data: { data: x },
            });
            return dialogRef2.afterClosed();
          }
        }),
        mergeMap((result) => {
          if (result) {
            if (result.pass === this.password) {
              return this.store.deleteMember(x);
            }
          }
        })
      )
      .subscribe(
        () => {},
        (err) => console.log(err)
      );
  }
}
