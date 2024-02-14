import { Observer, concat, interval, of, take } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const interval$ = interval(1000);

concat(interval$.pipe(take(3)), interval$.pipe(take(2)), of(5)).subscribe(observer);
