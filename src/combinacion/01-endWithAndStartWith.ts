import { Observer, endWith, of, startWith } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const numeros$ = of(1, 2, 3, 4, 5).pipe(endWith('x', 'y', 'z'), startWith('a', 'e', 'i', 'o', 'u'));

numeros$.subscribe(observer);
