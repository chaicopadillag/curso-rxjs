import { Observable, Observer, catchError, exhaustMap, fromEvent, map, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const form = document.createElement('form'),
  inputImail = document.createElement('input'),
  inputPassword = document.createElement('input'),
  inputSubmit = document.createElement('input');

inputImail.type = 'email';
inputImail.id = 'email';
inputImail.value = 'eve.holt@reqres.in';
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.value = 'cityslicka';
inputSubmit.type = 'submit';
inputSubmit.textContent = 'Enviar';

form.append(inputImail, inputPassword, inputSubmit);
document.body.appendChild(form);

const formEvent$ = fromEvent<FormDataEvent>(form, 'submit');

formEvent$
  .pipe(
    tap((e) => e.preventDefault()),
    map<FormDataEvent, UserLogin>(({ target }) => ({
      email: target['email'].value,
      password: target['password'].value,
    })),
    // mergeMap
    // switchMap
    exhaustMap<UserLogin, Observable<string>>((body) =>
      ajax.post<ResponseBody>('https://reqres.in/api/login?delay=1', body).pipe(
        map(({ response }) => response.token),
        catchError(() => of(null))
      )
    )
  )
  .subscribe(observer);

// Interfaces

interface ResponseBody {
  token: string;
}

interface UserLogin {
  email: string;
  password: string;
}
