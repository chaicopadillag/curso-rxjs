import { Observer, first, fromEvent, map, tap } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const client$ = fromEvent<MouseEvent>(document, 'click');

client$
  .pipe(
    tap((e) => console.log('tap:', e)),
    map(({ clientX, clientY }) => ({ clientX, clientY })),
    first((e) => e.clientY >= 150)
  )
  .subscribe(observer);
