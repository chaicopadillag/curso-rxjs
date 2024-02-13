import { Observer, interval, timer } from 'rxjs';

const observer: Partial<Observer<number>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const ahora = new Date();
ahora.setSeconds(ahora.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);

const timer$ = timer(ahora);

console.log('inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('fin');
