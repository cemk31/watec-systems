import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  getDataObservable() {
    throw new Error('Method not implemented.');
  }

  private data: any;
  private dataLoadedSubject = new Subject<void>();
  dataLoaded$ = this.dataLoadedSubject.asObservable();

  setData(data: any): void {
    this.data = data;
    this.dataLoadedSubject.next();
  }

  getData(): any {
    return this.data;
  }

private initSource = new Subject<void>();
public initObservable = this.initSource.asObservable();

  signalInit() {
    this.initSource.next();
  }
}
