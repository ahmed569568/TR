import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-add-investment-dialog',
  templateUrl: './confirm-add-investment-dialog.component.html',
  styleUrls: ['./confirm-add-investment-dialog.component.scss'],
})
export class ConfirmAddInvestmentDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}
