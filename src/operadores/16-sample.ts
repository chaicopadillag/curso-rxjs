import { Observer, fromEvent, interval, sample } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const intervarl$ = interval(2000);
const doc$ = fromEvent<MouseEvent>(document, 'click');

intervarl$.pipe(sample(doc$)).subscribe(observer);
