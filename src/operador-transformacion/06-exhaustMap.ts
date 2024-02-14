import { Observer, exhaustMap, fromEvent, interval, take } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const click$ = fromEvent(document, 'click');

const interval$ = interval(500).pipe(take(3));

click$.pipe(exhaustMap(() => interval$)).subscribe(observer);
