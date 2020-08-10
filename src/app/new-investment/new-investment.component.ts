import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAddInvestmentDialogComponent } from '../confirm-add-investment-dialog/confirm-add-investment-dialog.component';
import { mergeMap, startWith, map } from 'rxjs/operators';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-investment',
  templateUrl: './new-investment.component.html',
  styleUrls: ['./new-investment.component.scss'],
})
export class NewInvestmentComponent implements OnInit {
  newInvestmentForm = new FormGroup({
    name: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    owner: new FormControl('', Validators.required),
    buyingTime: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    pastIncome: new FormControl('', Validators.required),
    futureIncome: new FormControl('', Validators.required),
  });
  filteredOptions: any;
  members;
  constructor(
    private store: StoreService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.newInvestmentForm
      .get('owner')
      .valueChanges.pipe(
        startWith(''),
        map((value: any) =>
          this.members.filter((x) => {
            return x.name.toString().toLowerCase().includes(value);
          })
        )
      );
    this.getMainData().subscribe((x) => {
      this.members = x;
    });
  }
  getMainData() {
    return this.store.observable$.pipe(map((x) => this.convert(x)));
  }
  convert(x) {
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push({ ...x[i]['main-data'] });
      arr[i].index = x[i].index;
    }
    return arr;
  }
  onSubmit(x) {
    const dialogRef = this.dialog.open(ConfirmAddInvestmentDialogComponent);
    dialogRef
      .afterClosed()
      .pipe(
        mergeMap((result) => {
          return this.store.addInvestment(x);
        })
      )
      .subscribe(
        () => this.router.navigate(['/investments']),
        (err) => console.log(err)
      );
  }
}
