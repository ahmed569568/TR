import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditInvestmentDialogComponent } from '../edit-investment-dialog/edit-investment-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { database } from 'src/assets/json/database';
import { StoreService } from '../store.service';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.scss'],
})
export class InvestmentsComponent implements OnInit {
  investments;
  loaded;
  p = 1;
  password = '1234';
  constructor(public dialog: MatDialog, private store: StoreService) {}

  ngOnInit(): void {
    this.getInvestments().subscribe((x) => (this.investments = x));
  }
  getInvestments() {
    return this.store.observable$.pipe(map((x) => this.convert(x)));
  }

  convert(x) {
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      for (let t = 0; t < x[i].investments.length; t++)
        arr.push(x[i].investments[t]);
    }
    return arr;
  }
  openDialog(x) {
    this.loaded = this.investments.filter((y) => y.index === x)[0];
    const dialogRef = this.dialog.open(EditInvestmentDialogComponent, {
      data: { data: this.loaded },
      height: '450px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((result) => {
          if (result) {
            return this.store.editInvestment(x, result);
          }
        })
      )
      .subscribe(
        () => console.log('done'),
        (err) => console.log(err)
      );
  }
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
              return this.store.deleteInvestment(x);
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
