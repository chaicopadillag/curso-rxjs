import { Observer, distinctUntilKeyChanged, from } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

type UserType = {
  name: string;
};

const users: UserType[] = [
  { name: 'Juan' },
  { name: 'Juan' },
  { name: 'Pedro' },
  { name: 'Pedro' },
  { name: 'Maria' },
  { name: 'Luis' },
  { name: 'Maria' },
  { name: 'Maria' },
  { name: 'Juan' },
  { name: 'Pedro' },
  { name: 'Carlos' },
];

const users$ = from(users);
users$.pipe(distinctUntilKeyChanged('name')).subscribe(observer);
