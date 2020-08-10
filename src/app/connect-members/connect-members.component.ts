import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-connect-members',
  templateUrl: './connect-members.component.html',
  styleUrls: ['./connect-members.component.scss'],
})
export class ConnectMembersComponent implements OnInit {
  members;
  filteredOptions: Observable<any>;
  filteredOptions2: Observable<any>;
  filteredOptions3: Observable<any>;
  filteredOptions4: Observable<any>;
  filteredOptions5: Observable<any>;
  connectForm = new FormGroup({
    name1: new FormControl('', Validators.required),
    name2: new FormControl('', Validators.required),
    name3: new FormControl(''),
    name4: new FormControl(''),
    name5: new FormControl(''),
    duration: new FormControl('', Validators.required),
  });
  constructor(private store: StoreService) {}

  ngOnInit(): void {
    this.filteredOptions = this.connectForm.get('name1').valueChanges.pipe(
      map((value: any) =>
        this.members.filter((x) => {
          return x.name.toString().toLowerCase().includes(value);
        })
      )
    );
    this.filteredOptions2 = this.connectForm.get('name2').valueChanges.pipe(
      map((value: any) =>
        this.members.filter((x) => {
          return x.name.toString().toLowerCase().includes(value);
        })
      )
    );
    this.filteredOptions3 = this.connectForm.get('name3').valueChanges.pipe(
      map((value: any) =>
        this.members.filter((x) => {
          return x.name.toString().toLowerCase().includes(value);
        })
      )
    );
    this.filteredOptions4 = this.connectForm.get('name4').valueChanges.pipe(
      map((value: any) =>
        this.members.filter((x) => {
          return x.name.toString().toLowerCase().includes(value);
        })
      )
    );
    this.filteredOptions5 = this.connectForm.get('name5').valueChanges.pipe(
      map((value: any) =>
        this.members.filter((x) => {
          return x.name.toString().toLowerCase().includes(value);
        })
      )
    );
    this.getMainData().subscribe(x => this.members = x)
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
