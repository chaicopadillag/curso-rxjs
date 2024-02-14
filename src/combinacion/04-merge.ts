import { Observer, fromEvent, map, merge } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const keyup$ = fromEvent(document, 'keyup'),
  click$ = fromEvent(document, 'click');

merge(keyup$.pipe(map(({ type }) => type)), click$.pipe(map(({ type }) => type))).subscribe(
  observer
);
