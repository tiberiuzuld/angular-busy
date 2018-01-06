import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'cg-busy-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  delay: number;
  minDuration: number;
  message: string;
  backdrop: boolean;
  promise: any;
  templateUrl: string;
  templates: Array<{ label: string, url: string }>;
  promiseTypes: Array<{ id: number, label: string, value: any }>;
  promiseType: { id: number, label: string, value: any };

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.delay = 0;
    this.minDuration = 0;
    this.message = 'Please Wait...';
    this.backdrop = true;
    this.promise = null;
    this.templateUrl = '';

    this.templates = [
      {label: 'Standard', url: ''},
      {label: 'Custom', url: 'app/custom-template.html'}
    ];
    const longPromise = new Promise(function () {
    });
    this.promiseTypes = [
      {id: 0, label: 'Promise', value: this.getHttp.bind(this)},
      {id: 0, label: 'Defer', value: longPromise},
      {id: 1, label: 'Number', value: 1},
      {id: 2, label: 'Number `falsy`', value: 0},
      {id: 3, label: 'Boolean', value: true},
      {id: 4, label: 'Boolean false', value: false}
    ];

    this.promiseType = this.promiseTypes[0];
  }

  getHttp() {
    return this.http.get('https://httpbin.org/delay/3').toPromise();
  }

  demo() {
    if (typeof this.promiseType.value === 'function') {
      this.promise = this.promiseType.value();
    } else {
      this.promise = this.promiseType.value;
    }
  };

}
