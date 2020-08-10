import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditMemberDialogComponent } from '../edit-member-dialog/edit-member-dialog.component';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
import { map, mergeMap } from 'rxjs/operators';
import { StoreService } from '../store.service';
import {
  AccessibilityConfig,
  Action,
  ButtonEvent,
  ButtonsConfig,
  ButtonsStrategy,
  ButtonType,
  Description,
  DescriptionStrategy,
  DotsConfig,
  GalleryService,
  Image,
  ImageModalEvent,
  KS_DEFAULT_BTN_CLOSE,
  KS_DEFAULT_BTN_DELETE,
  KS_DEFAULT_BTN_DOWNLOAD,
  KS_DEFAULT_BTN_EXTURL,
  KS_DEFAULT_BTN_FULL_SCREEN,
  // KS_DEFAULT_BTN_ROTATE,
  PreviewConfig,
  LoadingConfig,
  LoadingType,
  CurrentImageConfig,
} from '@ks89/angular-modal-gallery';
@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.scss'],
})
export class MemberProfileComponent implements OnInit {
  x;
  displayedMember;
  members;
  password = '1234';
  modalImages = [
    new Image(0, {
      img: null
    }),
    new Image(1, {
      img: null
    }),
    new Image(2, {
      img: null
    }),
  ];
  customDescription: Description = {
    strategy: DescriptionStrategy.ALWAYS_HIDDEN,
  };
  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.x = +params.get('index');
    });
    this.getRequiredData().subscribe((x) => {
      this.displayedMember = x;
      for(let i = 0; i < this.displayedMember.officialDocumentsPhotos.length; i++){
      this.modalImages[i].modal.img = this.displayedMember.officialDocumentsPhotos[i]}
    });
  }
  getRequiredData() {
    return this.store.observable$.pipe(
      map(
        (x) =>
          this.convert(x).filter((y) => {
            return y.index === this.x;
          })[0]
      )
    );
  }
  convert(x) {
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push(x[i]['main-data']);
      if (!arr[i].index) {
        arr[i].index = x[i].index;
      }
    }
    return arr;
  }

  /*  addDialog() {
    const index2 = this.members[this.members.length - 1].index;
    const dialogRef = this.dialog.open(AddMemberDialogComponent, {});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        members.push(result);
        members[index2 + 1].index = index2 + 1;
      }
    });
  } */
  editDialog(x) {
    const dialogRef = this.dialog.open(EditMemberDialogComponent, {
      data: { data: this.displayedMember },
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

  refactoredDeleteDialog(x) {
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
        () => this.router.navigate(['/members']),
        (err) => console.log(err)
      );
  }
}
