import {HttpClient} from '@angular/common/http';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {CgBusyDirective} from 'angular-busy2';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-cg-busy',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    CgBusyDirective
  ]
})
export class AppComponent implements OnInit {
  delay: number;
  minDuration: number;
  message: string;
  backdrop: boolean;
  showCustomTemplate: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promise: any;
  templateUrl: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promiseTypes: {id: number, label: string, value: any}[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  promiseType: {id: number, label: string, value: any};

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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getHttp(): Promise<any> {
    return this.http.get('https://httpbin.org/delay/3').toPromise();
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
