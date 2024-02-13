import { Observer, distinct, distinctUntilChanged, from, of } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const numeros$ = of(1, 1, 1, 1, 2, 2, 2, 3, 4, 3, 4, 3, 5, 5, 4, 3, 2, 1, '1', '2');

console.log('==========distinct number===========');
numeros$.pipe(distinct()).subscribe(observer);

console.log('==========distinctUntilChanged number===========');
numeros$.pipe(distinctUntilChanged()).subscribe(observer);

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
console.log('==========distinct object===========');
users$.pipe(distinct((u) => u.name)).subscribe(observer);
console.log('==========distinctUntilChanged object===========');
users$.pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name)).subscribe(observer);
