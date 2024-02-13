import { Observable, Observer, Subject } from 'rxjs';

const observer: Partial<Observer<number>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const obs$ = new Observable<number>((sub) => {
  const intervalId = setInterval(() => {
    sub.next(Math.random());
  }, 1000);

  return () => {
    clearInterval(intervalId);
    console.log('Intervalo destruido...');
  };
});

const subject$ = new Subject<number>();
const suscriptionObs$ = obs$.subscribe(subject$);

// obs$.subscribe(observer);
// obs$.subscribe(observer);

subject$.subscribe(observer);
subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(500);
  subject$.complete();
  suscriptionObs$.unsubscribe();
}, 5000);
