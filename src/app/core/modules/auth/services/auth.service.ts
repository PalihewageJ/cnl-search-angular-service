import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  login(): void {}
  logout(): void {}

  private _user?: User;

  public getUsername(): string | undefined {
    return this._user?.username;
  }

  public setUser(user: User) {
    this._user = user;
  }
}
