import { Observer, map, range, tap } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const numeros$ = range(1, 10);

numeros$
  .pipe(
    tap((n) => console.log('antes: ', n)),
    map((n) => n * 10),
    tap({
      next: (n) => console.log('Despues:', n),
      complete: () => console.log('completado!!!!!!!'),
    })
  )
  .subscribe(observer);
