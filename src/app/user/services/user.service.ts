import {map, Observable} from 'rxjs';
import {User, UserTo} from '../model';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {parseDatePropertiesForEachElementOf} from '@shared/i18n/date-utils';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) {
  }

  findAll(): Observable<User[]> {
    return this.http.get<UserTo[]>('http://localhost:3000/users')
      .pipe(map(userTos => parseDatePropertiesForEachElementOf<UserTo, User>(
        userTos, ['dateOfBirth', 'createdAt'])));
  }
}
