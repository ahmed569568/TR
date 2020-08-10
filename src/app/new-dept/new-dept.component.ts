import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-new-dept',
  templateUrl: './new-dept.component.html',
  styleUrls: ['./new-dept.component.scss'],
})
export class NewDeptComponent implements OnInit {
  filteredOptions: Observable<any>;
  filteredOptions2: Observable<any>;
  members;
  public show: boolean = false;
  show2: number;
  newDeptForm = new FormGroup({
    name: new FormControl('', Validators.required),
    recipient: new FormControl('', Validators.required),
    recipientname: new FormControl(''),
    amount: new FormControl('', Validators.required),
    deptType: new FormControl('', Validators.required),
    chequeNo: new FormControl('', Validators.required),
    chequeDate: new FormControl('', Validators.required),
    deptDuration: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    mean: new FormControl('', Validators.required),
  });
  theAmount$ = this.newDeptForm.get('amount').valueChanges;
  theMean$ = this.newDeptForm.get('mean').valueChanges;
  theDuration$ = combineLatest(this.theAmount$, this.theMean$);
  theResult;
  start$ = this.newDeptForm.get('start').valueChanges;
  end$ = combineLatest(this.theDuration$, this.start$);
  theEnd;
  constructor(private store: StoreService) {}
  ngOnInit(): void {
    this.filteredOptions = this.newDeptForm.get('name').valueChanges.pipe(
      map((value: any) =>
        this.members.filter((x) => {
          return x.name.toString().toLowerCase().includes(value);
        })
      )
    );
    this.filteredOptions2 = this.newDeptForm
      .get('recipientname')
      .valueChanges.pipe(
        map((value: any) =>
          this.members.filter((x) => {
            return x.name.toString().toLowerCase().includes(value);
          })
        )
      );
    this.theDuration$.subscribe(([x, y]) => {
      if (x % y !== 0) {
        this.theResult = Math.floor(x / y) + 1;
      } else {
        this.theResult = x / y;
      }
    });
    this.end$.subscribe(([x, y]) => {
      const month = new Date(y).getMonth();
      const year = new Date(y).getFullYear();
      let theX;
      if (x[0] % x[1] !== 0) {
        theX = Math.floor(x[0] / x[1]);
      } else {
        theX = x[0] / x[1];
      }
      const NoOfMonths = month + theX;
      const NoOfYears = Math.floor(NoOfMonths / 12);
      let theMonths = NoOfMonths % 12;
      let formattedMonths;
      let theYears = year + NoOfYears;
      if (theMonths == 0) {
        theMonths = 12;
        theYears = theYears - 1;
      } else if (theMonths < 10) {
        formattedMonths = `0${theMonths}`;
      }

      this.theEnd = `${theYears}-${formattedMonths || theMonths}-01`;
    });
    this.getMainData().subscribe((x) => (this.members = x));
  }
  getMainData() {
    return this.store.observable$.pipe(map((x) => this.convert(x)));
  }
  convert(x) {
    const arr = [];
    for (let i = 0; i < x.length; i++) {
      arr.push(x[i]['main-data']);
      arr[i].index = x[i].index;
    }
    return arr;
  }

  onSubmit(x) {
    console.log(x);
  }
  toggle1(x) {
    if (x === 'urgant') {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  toggle2(x) {
    if (x === 'الشخص نفسه') {
      this.show2 = 1;
    } else if (x === 'شخص من خارج الصندوق') {
      this.show2 = 2;
    } else {
      this.show2 = 3;
    }
  }
}
