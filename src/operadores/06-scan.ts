import { Observer, from, reduce, scan } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};
const numeros = [1, 2, 3, 4, 5];

const totalReduce = (aculado, valorActual) => aculado + valorActual;

// const total = numeros.reduce(totalReduce);
// console.log({ total });

from(numeros).pipe(reduce(totalReduce, 0)).subscribe(observer);
from(numeros).pipe(scan(totalReduce, 0)).subscribe(observer);
