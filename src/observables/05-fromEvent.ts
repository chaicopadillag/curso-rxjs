import { Observer, fromEvent } from 'rxjs';

const observer: Partial<Observer<number>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const mouseEvent$ = fromEvent<MouseEvent>(document, 'click');
const keyEvent$ = fromEvent<KeyboardEvent>(document, 'keydown');

mouseEvent$.subscribe(({ x, y }) => {
  console.log({ x, y });
});

keyEvent$.subscribe(({ key }) => {
  console.log({ key });
});
