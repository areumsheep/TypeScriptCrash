import { BASE_URL } from '../constant/index';

export default async function getData(url: string, method: string, data: any) {
  const config: any = {
    method: method,
    headers: new Headers({ 'content-type': 'application/json' }),
  };
  if (data) config.body = JSON.stringify(data);
  const response = await fetch(BASE_URL + url, config);
  const parse = await response.json();
  return parse;
}
