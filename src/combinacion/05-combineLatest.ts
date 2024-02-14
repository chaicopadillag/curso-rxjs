import { Observer, combineLatest, fromEvent, map } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const form = document.createElement('form'),
  inputImail = document.createElement('input'),
  inputPassword = document.createElement('input');

form.append(inputImail, inputPassword);
document.body.appendChild(form);

const obtenerValue = (element: HTMLInputElement) =>
  fromEvent(element, 'keyup').pipe(map(({ target }) => target['value']));

combineLatest([obtenerValue(inputImail), obtenerValue(inputPassword)]).subscribe(observer);
