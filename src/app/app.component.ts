import { Component } from '@angular/core';
import {BUSINESSES} from './businesses-mock';
import {BUSINESS} from './business';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'untitled3';
  businesses = BUSINESSES;
  selectedBusiness: BUSINESS;
  selectBusiness(business: BUSINESS) {
    this.selectedBusiness = business;
  }

}
