import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-member-dialog',
  templateUrl: './edit-member-dialog.component.html',
  styleUrls: ['./edit-member-dialog.component.scss']
})
export class EditMemberDialogComponent implements OnInit {
  editForm = new FormGroup({
    name: new FormControl(this.data.data.name, Validators.required),
    id: new FormControl(this.data.data.id, Validators.required),
    email: new FormControl(this.data.data.email, Validators.required),
    homephone: new FormControl(this.data.data.homephone, Validators.required),
    mobilephone: new FormControl(
      this.data.data.mobilephone,
      Validators.required
    ),
    account1: new FormControl(this.data.data.account1, Validators.required),
    account2: new FormControl(this.data.data.account2),
    account3: new FormControl(this.data.data.account3),
    account4: new FormControl(this.data.data.account4),
    account5: new FormControl(this.data.data.account5),
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
