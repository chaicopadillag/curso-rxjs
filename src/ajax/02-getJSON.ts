import { Observer } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const apiUrl = 'https://httpbin.org/delay/1';

ajax.getJSON(apiUrl, { 'mi-token': 'dasdd44' }).subscribe(observer);
