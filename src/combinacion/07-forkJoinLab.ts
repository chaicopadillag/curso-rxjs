import { Observer, catchError, forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const apiGitHub = 'https://api.github.com/users/chaico';

forkJoin({
  user: ajax.getJSON(apiGitHub),
  repo: ajax.getJSON(apiGitHub + '/repos'),
  gists: ajax.getJSON(apiGitHub + '/gists'),
})
  .pipe(catchError(() => of({})))
  .subscribe(observer);
