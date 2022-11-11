import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from "@shared/interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!: User;
  public currentuserData$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  constructor(private http: HttpClient) { }

  public getCountriesData(): Observable<any> {
    return of(['Ukraine', 'USA', 'Poland'])
  }

  public getCurrentUser(): void {
    this.currentuserData$.next(this.user || JSON.parse(localStorage.getItem('user')!));
  }

  public updateUser(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.currentuserData$.next(user);
  }

  public removeUser(): void {
    this.currentuserData$.next(null);
  }
}
