import { Observer, catchError, map, of } from 'rxjs';
import { AjaxResponse, ajax } from 'rxjs/ajax';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const apiUrl = 'https://api.github.com/users?per_page=10';

ajax(apiUrl)
  .pipe(
    map<AjaxResponse<any>, []>((r) => r.response),
    catchError((err) => of([]))
  )
  .subscribe(observer);
