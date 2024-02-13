import { Observer, from } from 'rxjs';

const observer: Partial<Observer<number>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

// const dataOf$ = of(1, 2, 3, 4, 5);
// const dataOf$ = of([1, 2, 3, 4, 5]);
// const dataOf$ = from([1, 2, 3, 4, 5]);

// const fetch$ = from(fetch('https://api.github.com/users/chaicopadillag'));

// fetch$.subscribe({
//   next: async (res) => {
//     const data = await res.json();
//     console.log(data);
//   },
// });
// fetch$.subscribe(observer);

const miGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const iterable = miGenerator();
// for (const iterator of iterable) {
//   console.log(iterator);
// }

from(iterable).subscribe(observer);
