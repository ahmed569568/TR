import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditInvestmentDialogComponent } from '../edit-investment-dialog/edit-investment-dialog.component';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { StoreService } from '../store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss']
})
export class InvestmentDetailsComponent implements OnInit {
  x: string;
  investments
  loaded: any
  password: any = "1234";
  constructor(private route: ActivatedRoute, public dialog: MatDialog, private store: StoreService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.x = params.get("index");
    });
    this.getInvestments().subscribe(x => this.investments = x);
  }
  getInvestments(){
    return this.store.observable$.pipe(map((x) => this.convert(x)));
  }

  convert(x) {
    const arr = []
    for (let i = 0; i < x.length; i++) {
      for (let t = 0; t < x[i].investments.length; t++)
        arr.push(x[i].investments[t])
    }

    return arr
  }


  openDialog(x) {
    this.loaded = this.investments[x];
    const dialogRef = this.dialog.open(EditInvestmentDialogComponent, {
      data: { data: this.loaded }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.investments[x] = result;
        this.investments[x].index = x;
      }
    });
  }
  delete1(x) {
    const newData = this.investments.filter(y => y.index !== x);
    this.investments = newData;
  }

  deleteDialog(x) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { data: x }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const dialogRef2 = this.dialog.open(PasswordDialogComponent, {
          data: { data: x }
        });
        dialogRef2.afterClosed().subscribe(result => {
          console.log(result);
          if (result) {
            if (result.pass === this.password) {
              console.log("done");
              this.delete1(x);
            }
          }
        });
      }
    });
  }
}
