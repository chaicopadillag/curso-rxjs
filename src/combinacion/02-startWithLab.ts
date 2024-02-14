import { Observer, startWith } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const loadingDiv = document.createElement('div');
loadingDiv.classList.add('loading');
loadingDiv.innerHTML = 'Cargando...';

const body = document.querySelector('body');

const apiUrl = 'https://reqres.in/api/users?delay=3';

ajax(apiUrl)
  .pipe(startWith(true))
  .subscribe((res) => {
    console.log(res);
    if (res === true) {
      body.appendChild(loadingDiv);
    } else {
      body.querySelector('.loading').remove();
    }
  });
