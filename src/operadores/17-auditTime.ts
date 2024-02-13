import { Observer, auditTime, fromEvent, map, tap } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const doc$ = fromEvent<MouseEvent>(document, 'click');

doc$
  .pipe(
    map(({ x }) => x),
    tap((x) => console.log(`click: ${x}`)),
    auditTime(5000)
  )
  .subscribe(observer);
