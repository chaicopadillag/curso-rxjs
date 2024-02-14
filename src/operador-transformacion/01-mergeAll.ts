import { Observable, Observer, debounceTime, fromEvent, map, mergeAll } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export interface ResponseGithub {
  total_count: number;
  incomplete_results: boolean;
  items: Item[];
}

export interface Item {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: Type;
  site_admin: boolean;
  score: number;
}

enum Type {
  Organization = 'Organization',
  User = 'User',
}

const observer: Partial<Observer<any>> = {
  next: (value) => console.log('next: ', value),
  error: (error) => console.warn('Error en: ', error),
  complete: () => console.log('complete'),
};

const apiUrl = 'https://api.github.com/search/users?q=';

const input = document.createElement('input');
const ol = document.createElement('ol');
input.type = 'text';

document.body.append(input, ol);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

const printUser = (items: Item[]) => {
  ol.innerHTML = '';
  for (const item of items) {
    const img = document.createElement('img'),
      link = document.createElement('a'),
      li = document.createElement('li');

    img.src = item.avatar_url;
    link.href = item.html_url;
    link.text = 'Ver perfil';
    link.target = '_blank';
    li.append(img, ' ' + item.login + ' ', link);

    ol.appendChild(li);
  }
};

input$
  .pipe(
    debounceTime(300),
    map<KeyboardEvent, Observable<ResponseGithub>>(({ target }) => {
      const text = (target as HTMLInputElement).value;
      return ajax.getJSON(apiUrl + text);
    }),
    mergeAll(),
    map(({ items }) => items)
  )
  .subscribe(printUser);
