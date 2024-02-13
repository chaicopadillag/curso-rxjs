import { Observer, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

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
    debounceTime(1000),
    map(({ target }) => (target as HTMLInputElement).value),
    distinctUntilChanged()
  )
  .subscribe(observer);
