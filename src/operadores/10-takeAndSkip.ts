import { Observer, fromEvent, interval, skip, takeUntil, tap } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const button = document.createElement('button');
button.textContent = 'Click to here';
document.body.appendChild(button);

const counters$ = interval(1000);

const buton$ = fromEvent(button, 'click').pipe(
  tap(() => console.log('antes de skip')),
  skip(1),
  tap(() => console.log('despues de skip'))
);

counters$.pipe(takeUntil(buton$)).subscribe(observer);
