import { Observable, Observer } from 'rxjs';

const observer: Partial<Observer<number>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const obs$ = new Observable<number>((subs) => {
  let n = 0;
  const interval = setInterval(() => {
    n++;
    subs.next(n);
    console.log('n:' + n);
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log('Limpiando interval');
  };
});

const sub1 = obs$.subscribe(observer);
const sub2 = obs$.subscribe(observer);
const sub3 = obs$.subscribe(observer);
sub1.add(sub2);
sub2.add(sub3);

setTimeout(() => {
  sub1.unsubscribe();
  //   sub2.unsubscribe();
  //   sub3.unsubscribe();
  console.log('set timeout 5Seg');
}, 5000);
