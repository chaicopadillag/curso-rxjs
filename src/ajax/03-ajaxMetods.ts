import { Observer, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const apiUrl = 'https://httpbin.org/delay/1';
// const apiUrl = 'https://api.github.com/users?per_page=10';

ajax({
  url: apiUrl,
  method: 'POST',
  headers: { token: '5a6sd5a6s' },
  body: { name: 'code' },
})
  .pipe(
    catchError((err) => {
      console.log(err);
      return of([]);
    })
  )
  .subscribe(observer);
