import { Observer, fromEvent, interval, switchMap } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const obs$ = fromEvent(document, 'click');
const interval$ = interval(1000);

obs$
  .pipe(
    // mergeMap(() => interval$)
    switchMap(() => interval$)
  )
  .subscribe(observer);
