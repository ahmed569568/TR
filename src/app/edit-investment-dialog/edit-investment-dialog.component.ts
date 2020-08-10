import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-investment-dialog',
  templateUrl: './edit-investment-dialog.component.html',
  styleUrls: ['./edit-investment-dialog.component.scss']
})
export class EditInvestmentDialogComponent implements OnInit {

  editInvestForm = new FormGroup({
    name: new FormControl(this.data.data.name, Validators.required),
    location: new FormControl(this.data.data.location, Validators.required),
    date: new FormControl(this.data.data.date, Validators.required),
    amount: new FormControl(this.data.data.amount, Validators.required),
    pastincome: new FormControl(
      this.data.data.pastincome,
      Validators.required
    ),
    futureincome: new FormControl(this.data.data.futureincome, Validators.required),
  });
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
