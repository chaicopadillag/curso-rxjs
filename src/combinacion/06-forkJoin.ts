import { Observer, forkJoin, interval, of, take } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const numbers$ = of(1, 2, 3);
const interval$ = interval(1000).pipe(take(3));
const vocales$ = of('a', 'b', 'c', 'd', 'e', 'f');

forkJoin({ number: numbers$, time: interval$, vocales: vocales$ }).subscribe(observer);
