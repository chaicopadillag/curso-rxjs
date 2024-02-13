import { Observer, of, takeWhile } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const numeros$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

numeros$
  .pipe(
    // takeWhile((n) => n <= 5)
    takeWhile((n) => n <= 5, true)
  )
  .subscribe(observer);
