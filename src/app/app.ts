import { HttpClient } from '@angular/common/http';
import { Component, inject, Signal, signal } from '@angular/core';
import { form, FormField, FormRoot, min, required } from '@angular/forms/signals';
import { MatButton } from '@angular/material/button';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';
import { MatError, MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { MatOption, MatSelect } from '@angular/material/select';
import { CgBusyDirective } from 'angular-busy2';
import { firstValueFrom, Observable, Subscription } from 'rxjs';

type PromiseTypeValue = (() => Promise<any> | Subscription | Observable<any> | Signal<any>) | number | boolean;
interface PromiseType {
  id: number;
  label: string;
  value: PromiseTypeValue;
}

interface Model {
  delay: number;
  minDuration: number;
  message: string;
  backdrop: boolean;
  showCustomTemplate: boolean;
  promiseType: PromiseType;
}

@Component({
  selector: 'app-cg-busy',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    CgBusyDirective,
    FormField,
    FormRoot,
    MatButton,
    MatCheckbox,
    MatError,
    MatFormField,
    MatGridList,
    MatGridTile,
    MatInput,
    MatLabel,
    MatOption,
    MatSelect
  ]
})
export class App {
  promiseTypes: PromiseType[] = [
    { id: 0, label: 'Promise', value: this.getHttp.bind(this) },
    { id: 1, label: 'Observable', value: this.getHttpObserver.bind(this) },
    { id: 1, label: 'Subscription', value: this.getHttpSubscription.bind(this) },
    { id: 5, label: 'Signal', value: this.getSignal.bind(this) },
    { id: 5, label: 'Signal Delayed', value: this.getSignalDelay.bind(this) },
    { id: 2, label: 'Number', value: 1 },
    { id: 3, label: 'Number `falsy`', value: 0 },
    { id: 4, label: 'Boolean', value: true },
    { id: 5, label: 'Boolean false', value: false }
  ];
  model = signal<Model>({
    delay: 0,
    minDuration: 0,
    message: 'Please Wait...',
    backdrop: true,
    showCustomTemplate: false,
    promiseType: this.promiseTypes[0]
  });
  modelForm = form(
    this.model,
    schemaPath => {
      required(schemaPath.delay, { message: 'Delay is required' });
      required(schemaPath.minDuration, { message: 'MinDuration is required' });
      min(schemaPath.delay, 0, { message: 'Minimum value for Delay is 0' });
      min(schemaPath.minDuration, 0, { message: 'Minimum value for MinDuration is 0' });
    },
    {
      submission: {
        action: async () => {
          const value = this.modelForm.promiseType().value().value;
          if (typeof value === 'function') {
            this.promise = value();
          } else {
            this.promise = value;
          }
        }
      }
    }
  );
  promise: Promise<any> | Subscription | Observable<any> | Signal<any> | number | boolean = false;

  private http = inject(HttpClient);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getHttp(): Promise<any> {
    return firstValueFrom(this.http.get('https://httpbin.org/delay/3'));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getHttpObserver(): Observable<any> {
    return this.http.get('https://httpbin.org/delay/3');
  }

  getHttpSubscription(): Subscription {
    return this.http.get('https://httpbin.org/delay/3').subscribe(() => {});
  }

  getSignal(): Signal<any> {
    const s = signal<boolean>(true);
    setTimeout(() => {
      s.set(false);
    }, 3000);
    return s;
  }

  getSignalDelay(): Signal<any> {
    const s = signal<boolean>(false);
    setTimeout(() => {
      s.set(true);
    }, 3000);
    setTimeout(() => {
      s.set(false);
    }, 6000);
    return s;
  }
}
