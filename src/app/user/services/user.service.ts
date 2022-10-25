import {map, Observable} from 'rxjs';
import {User, UserSearchCriteria, UserTo} from '../model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {parseDatePropertiesForEachElementOf} from '@shared/i18n/date-utils';

@Injectable()
export class UserService {
  constructor(private readonly http: HttpClient) {
  }

  findBy(searchCriteria: UserSearchCriteria): Observable<User[]> {
    const params = new HttpParams().set('q', searchCriteria.query || '');
    return this.http.get<UserTo[]>('http://localhost:3000/users', {params})
      .pipe(map(userTos => parseDatePropertiesForEachElementOf<UserTo, User>(
        userTos, ['dateOfBirth', 'createdAt'])));
  }

  findAll(): Observable<User[]> {
    return this.http.get<UserTo[]>('http://localhost:3000/users')
      .pipe(map(userTos => parseDatePropertiesForEachElementOf<UserTo, User>(
        userTos, ['dateOfBirth', 'createdAt'])));
  }
}
