import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { database } from 'src/assets/json/database';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private subject = new BehaviorSubject(database.members);
  observable$ = this.subject.asObservable();
  init() {
    return this.observable$.subscribe((x) => x);
  }
  constructor() {}
  addMember(x) {
    const state = this.subject.getValue();
    state.unshift({
      index: state[state.length - 1].index + 1,
      'main-data': {
        name: x.name,
        id: x.id,
        email: x.email,
        mobilephone: x.homephone,
        homephone: x.mobilephone,
        account1: x.account1,
        account2: x.account2,
        account3: x.account3,
        account4: x.account4,
        account5: x.account5,
        personalImage: 'https://picsum.photos/200',
        officialDocumentsPhotos: [
          'https://picsum.photos/400',
          'https://picsum.photos/300',
          'https://picsum.photos/250',
        ],
      },
      depts: { pastdepts: [], 'current-depts': [] },
      investments: [],
      'connected-members': [],
    });
    this.subject.next(state);
    return this.observable$;
  }
  editMember(index, data) {
    const currentState = this.subject.getValue();
    const stateArray = currentState.filter((y) => {
      return index !== y.index;
    });
    let cleanData = currentState.filter((y) => {
      return index === y.index;
    })[0];
    cleanData['main-data'] = data;
    stateArray.unshift(cleanData);
    this.subject.next(stateArray);
    return this.observable$;
  }
  deleteMember(index) {
    const currentState = this.subject.getValue();
    const stateArray = currentState.filter((y) => {
      return index !== y.index;
    });
    this.subject.next(stateArray);
    return this.observable$;
  }
  editInvestment(index, data) {
    const currentState = this.subject.getValue();
    let investmentOwnerData = currentState.filter((y) => {
      let bool;
      for (let i = 0; i < y.investments.length; i++) {
        if (y.investments[i].index === index) {
          bool = true;
        }
      }
      if (bool) {
        return true;
      } else {
        return false;
      }
    })[0];
    const theRest = currentState.filter((y) => {
      let bool;
      for (let i = 0; i < y.investments.length; i++) {
        if (y.investments[i].index === index) {
          bool = true;
        }
      }
      if (bool) {
        return false;
      } else {
        return true;
      }
    });
    let ownerWOInvest = investmentOwnerData.investments.filter((y) => {
      return index !== y.index;
    });

    let ownerWithInvest = investmentOwnerData.investments.filter((y) => {
      return index === y.index;
    });
    data.index = index;
    ownerWOInvest.unshift(data);
    investmentOwnerData.investments = ownerWOInvest;
    theRest.unshift(investmentOwnerData);
    this.subject.next(theRest);
    return this.observable$;
  }
  deleteInvestment(index) {
    const currentState = this.subject.getValue();
    let investmentOwnerData = currentState.filter((y) => {
      let bool;
      for (let i = 0; i < y.investments.length; i++) {
        if (y.investments[i].index === index) {
          bool = true;
        }
      }
      if (bool) {
        return true;
      } else {
        return false;
      }
    })[0];
    const theRest = currentState.filter((y) => {
      let bool;
      for (let i = 0; i < y.investments.length; i++) {
        if (y.investments[i].index === index) {
          bool = true;
        }
      }
      if (bool) {
        return false;
      } else {
        return true;
      }
    });
    let ownerWOInvest = investmentOwnerData.investments.filter((y) => {
      return index !== y.index;
    });
    investmentOwnerData.investments = ownerWOInvest;
    theRest.unshift(investmentOwnerData);
    this.subject.next(theRest);
    return this.observable$;
  }
  addInvestment(x) {
    const currentState = this.subject.getValue();
    let targeted: any = currentState.filter((y) => {
      return y['main-data'].name === x.owner;
    })[0];
    targeted.investments.unshift({
      index: null,
      name: x.name,
      location: x.location,
      date: x.date,
      amount: x.amount,
      pastincome: x.pastincome,
      futureincome: x.futureincome,
    });
    console.log(targeted);
    return this.observable$;
  }
}
