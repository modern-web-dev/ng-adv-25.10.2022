import {map, Observable} from 'rxjs';
import {User, UserTo} from '../model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<UserTo[]>('http://localhost:3000/users')
      .pipe(map(userTos => {
        return userTos.map(userTo => ({
          ...userTo,
          createdAt: new Date(userTo.createdAt),
          dateOfBirth: new Date(userTo.dateOfBirth)
        }));
      }));
  }
}
