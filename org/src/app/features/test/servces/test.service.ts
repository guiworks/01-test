import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { mockList } from '../mocks/test.mock';

@Injectable({
  providedIn: 'root',
})
export class TestService {
  private mock = mockList as any;
  private searchSubject: BehaviorSubject<any> = new BehaviorSubject<
    any
  >(this.mock);

  constructor() {}

  search(valor: string): void {
    const result = this.mock.filter((item: any) =>
      item.name.toLowerCase().includes(valor.toLowerCase())
    );

    this.searchSubject.next(result);
  }

  getResult(): Observable<any> {
    return this.searchSubject.asObservable();
  }
}
