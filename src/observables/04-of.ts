import { Observer, of } from 'rxjs';

const observer: Partial<Observer<number>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<number[]>(...[1, 2, 3, 4, 5, 6], 7, 8, 9, 10);
// const obs$ = of('string', 1, true, { a: 1, b: 2 });

console.log('inicio observer');
obs$.subscribe(observer);
console.log('fin observer');
