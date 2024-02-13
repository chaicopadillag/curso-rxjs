import { Observer, fromEvent, map, range } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

range(1, 5)
  .pipe(map((value) => value * 10))
  .subscribe(observer);

const keyEventMap$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyEventMap$.pipe(map((event) => event.code)).subscribe(observer);
keyEventMap$.pipe(map((event) => event?.target['baseURI'])).subscribe(observer);
