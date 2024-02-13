import { Observable, Observer } from 'rxjs';

const observer: Partial<Observer<String>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const obserber$ = new Observable<String>((subscribe) => {
  subscribe.next('Hola mundo!');
  subscribe.next('Hello World!');
  subscribe.complete();

  subscribe.next('Hola de nuevo!');
});

obserber$.subscribe(observer);

// obserber$.subscribe(
//   (value) => console.log('next: ', value),
//   (error) => console.warn('Error en: ', error),
//   () => console.log('complete')
// );
