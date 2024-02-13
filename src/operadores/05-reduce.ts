import { Observer, interval, reduce, take } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};
const numeros = [1, 2, 3, 4, 5];

const totalReduce = (aculado, valorActual) => aculado + valorActual;

const total = numeros.reduce(totalReduce);
console.log({ total });

interval(1000).pipe(take(5), reduce(totalReduce, 5)).subscribe(observer);
