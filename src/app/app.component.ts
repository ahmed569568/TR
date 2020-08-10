import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TR';
  constructor(private router: Router, private store: StoreService) {}
  ngOnInit() {
    this.router.events.subscribe(evt => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.store.init()
  }
}
