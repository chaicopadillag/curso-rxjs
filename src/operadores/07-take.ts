import { Observer, of, take, tap } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const numeros$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(tap(console.log));

numeros$
  .pipe(
    tap((value) => console.log('tap:', value)),
    take(3)
  )
  .subscribe(observer);
