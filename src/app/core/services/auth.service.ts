import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '@shared/interfaces/user.interface';
import { DEFAULT_CODE } from '../../shared/constants/registration.constant';
import { UserService } from './userData.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private userService: UserService
  ) { }

  public verify(code: string): Observable<boolean> {
    return of(code === DEFAULT_CODE);
  }

  public saveUserData(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.userService.removeUser();
  }
}
