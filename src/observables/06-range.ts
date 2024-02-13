import { Observer, asyncScheduler, observeOn, range } from 'rxjs';

const observer: Partial<Observer<number>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const range$ = range(-5, 6).pipe(observeOn(asyncScheduler));

console.log('inicio');
range$.subscribe(observer);
console.log('fin');
