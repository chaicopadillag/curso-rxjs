import { Observer, asyncScheduler, distinctUntilChanged, fromEvent, map, throttleTime } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const input = document.createElement('input');
input.type = 'text';
document.body.appendChild(input);

const inputObs$ = fromEvent<KeyboardEvent>(input, 'keyup');

inputObs$
  .pipe(
    throttleTime(1000, asyncScheduler, { leading: true, trailing: true }),
    map(({ target }) => (target as HTMLInputElement).value),
    distinctUntilChanged()
  )
  .subscribe(observer);
