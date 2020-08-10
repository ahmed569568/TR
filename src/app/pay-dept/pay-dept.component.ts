import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { database } from 'src/assets/json/database';
import { map } from 'rxjs/operators';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-pay-dept',
  templateUrl: './pay-dept.component.html',
  styleUrls: ['./pay-dept.component.scss'],
})
export class PayDeptComponent implements OnInit {
  theindex;
  thedata;
  investTotal;
  filteredOptions: Observable<any>;
  connected;
  members;
  MonthsArray = [
    'يناير',
    'فبراير',
    'مارس',
    'ابريل',
    'مايو',
    'يونيو',
    'يوليو',
    'اغسطس',
    'سبتمبر',
    'اكتوبر',
    'نوفمبر',
    'ديسمبر',
  ];

  financialTransactionsForm = new FormGroup({
    month: new FormControl(
      this.MonthsArray[new Date().getMonth()],
      Validators.required
    ),
    date: new FormControl('', Validators.required),
    account: new FormControl('', Validators.required),
  });
  currentMonth = new Date().getMonth() - 1;

  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.filteredOptions = this.financialTransactionsForm
      .get('account')
      .valueChanges.pipe(
        map((value: any) =>
          this.members.filter((x) => {
            return (
              x.account1.toString().toLowerCase().includes(value) ||
              x.account2.toString().toLowerCase().includes(value) ||
              x.name.toString().toLowerCase().includes(value)
            );
          })
        )
      );
    this.connected = this.filteredOptions.subscribe((x) => {
      this.theindex = database.members[x[0].index]['connected-members'];
      this.thedata = database.members[x[0].index];
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
}
