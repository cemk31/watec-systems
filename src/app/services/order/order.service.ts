import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private data: any;
  private dataLoadedSubject = new Subject<void>();
  dataLoaded$ = this.dataLoadedSubject.asObservable();

  private initSource = new Subject<void>();
  public initObservable = this.initSource.asObservable();

  setData(data: any): void {
    this.data = data;
    this.dataLoadedSubject.next();
  }

  getData(): any {
    return this.data;
  }

  signalInit() {
    this.initSource.next();
  }
}