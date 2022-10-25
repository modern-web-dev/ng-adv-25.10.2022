export interface UserTo {
  id: number,
  firstName: string,
  lastName: string,
  createdAt: string,
  dateOfBirth: string
}

export interface User extends Omit<UserTo, 'createdAt' | 'dateOfBirth'> {
  createdAt: Date,
  dateOfBirth: Date
}

export type UserProps = Omit<User, 'id' | 'createdAt'>;
