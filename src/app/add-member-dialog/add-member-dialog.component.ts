import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-member-dialog',
  templateUrl: './add-member-dialog.component.html',
  styleUrls: ['./add-member-dialog.component.scss']
})
export class AddMemberDialogComponent implements OnInit {
  addForm = new FormGroup({
    name: new FormControl("", Validators.required),
    id: new FormControl("", Validators.required),
    email: new FormControl("", Validators.required),
    homephone: new FormControl("", Validators.required),
    mobilephone: new FormControl("", Validators.required),
    account1: new FormControl("", Validators.required),
    account2: new FormControl("", Validators.required)
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
