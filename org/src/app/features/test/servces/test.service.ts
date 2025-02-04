import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private mock: string[] = ['test1', 'test2'];
  private searchSubject: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.mock);


  constructor() { }

  search(valor: string): void {
    const result = this.mock.filter(item => item.toLowerCase().includes(valor.toLowerCase()));
    this.searchSubject.next(result);
  }

  getResult(): Observable<string[]> {
    return this.searchSubject.asObservable();
  }
}
