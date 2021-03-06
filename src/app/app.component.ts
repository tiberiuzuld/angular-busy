import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-cg-busy',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  delay: number;
  minDuration: number;
  message: string;
  backdrop: boolean;
  showCustomTemplate: boolean;
  // tslint:disable-next-line:no-any
  promise: any;
  templateUrl: string;
  // tslint:disable-next-line:no-any
  promiseTypes: { id: number, label: string, value: any }[];
  // tslint:disable-next-line:no-any
  promiseType: { id: number, label: string, value: any };

  constructor(private http: HttpClient) {
    this.showCustomTemplate = false;
  }

  ngOnInit(): void {
    this.delay = 0;
    this.minDuration = 0;
    this.message = 'Please Wait...';
    this.backdrop = true;
    this.promise = null;
    this.templateUrl = '';

    this.promiseTypes = [
      {id: 0, label: 'Promise', value: this.getHttp.bind(this)},
      {id: 1, label: 'Observable', value: this.getHttpObserver.bind(this)},
      {id: 1, label: 'Subscription', value: this.getHttpSubscription.bind(this)},
      {id: 2, label: 'Number', value: 1},
      {id: 3, label: 'Number `falsy`', value: 0},
      {id: 4, label: 'Boolean', value: true},
      {id: 5, label: 'Boolean false', value: false}
    ];

    this.promiseType = this.promiseTypes[0];
  }

  // tslint:disable-next-line:no-any
  getHttp(): Promise<any> {
    return this.http.get('https://httpbin.org/delay/3').toPromise();
  }

  // tslint:disable-next-line:no-any
  getHttpObserver(): Observable<any> {
    return this.http.get('https://httpbin.org/delay/3');
  }

  getHttpSubscription(): Subscription {
    return this.http.get('https://httpbin.org/delay/3').subscribe(() => {
    });
  }

  demo(): void {
    if (typeof this.promiseType.value === 'function') {
      this.promise = this.promiseType.value();
    } else {
      this.promise = this.promiseType.value;
    }
  }

}
