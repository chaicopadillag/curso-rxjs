import { Observer, filter, from, fromEvent, map, range } from 'rxjs';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

range(1, 10)
  .pipe(filter((value) => value % 2 == 0))
  .subscribe(observer);

type HeroType = {
  type: 'heroe' | 'villano';
  name: string;
};

const personajes: HeroType[] = [
  { type: 'heroe', name: 'Batman' },
  { type: 'heroe', name: 'Superman' },
  { type: 'villano', name: 'Joker' },
];

from(personajes)
  .pipe(filter((hero) => hero.type == 'heroe'))
  .subscribe(observer);

const keyEvent$ = fromEvent<KeyboardEvent>(document, 'keyup');

keyEvent$
  .pipe(
    map((e) => e.key),
    filter((key) => key === 'Enter')
  )
  .subscribe(observer);
