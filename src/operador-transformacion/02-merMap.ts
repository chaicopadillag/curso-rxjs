import { Observer, fromEvent, interval, map, mergeMap, of, take, takeUntil } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const vocales$ = of('a', 'e', 'i', 'o', 'u');

vocales$
  .pipe(
    mergeMap((vocal) =>
      interval(1000).pipe(
        map((n) => vocal + n),
        take(3)
      )
    )
  )
  .subscribe(observer);

const mouseup$ = fromEvent<MouseEvent>(document, 'mouseup');
const mousedown$ = fromEvent<MouseEvent>(document, 'mousedown');
const interval$ = interval();

mousedown$.pipe(mergeMap((e) => interval$.pipe(takeUntil(mouseup$)))).subscribe(observer);
